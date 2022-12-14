import React, { useState, useReducer, useEffect } from 'react';

const blobToFile = async (blobURL, fileName, mimeType, uploadText, postedAt,
    displayComment, displayLikePopover, id, comments, likes) => {
    comments.map(comment => comment.isEditable = false);
    const response = await fetch(blobURL);
    const blob = await response.blob();
    return {
        selectedFile: new File([blob], fileName, { type: mimeType }), uploadText, postedAt,
        displayComment, displayLikePopover, id, comments, likes
    }
}

function useLocalStorageReducer(key, defaultValue, reducer) {
    const [newState, setNewState] = useState([]);
    const [state, setState] = useReducer(reducer, defaultValue, () => {
        let data = [];
        let localStorageData = JSON.parse(window.localStorage.getItem(key));
        if (localStorageData && localStorageData.length > 0) {
            (async () => {
                const result = await Promise.all(
                    localStorageData.map((file) => {
                        if (file.selectedFile) {
                            return blobToFile(file.selectedFile, file.fileName,
                                file.fileType, file.uploadText, file.postedAt, file.displayComment,
                                file.displayLikePopover, file.id, file.comments, file.likes)
                        } else return file

                    })
                )
                console.log('inside async')
                localStorageData = result;
                // return result;
            })();
        }
        console.log('outside async')
        return localStorageData;
    });

    // useEffect(() => {
    //     /** get the files from localstorage and change them from blob back to file by using the blobToFile function */
    //     let localStorageData = JSON.parse(window.localStorage.getItem(key));
    //     if (localStorageData && localStorageData.length > 0) {
    //         (async () => {
    //             const result = await Promise.all(
    //                 localStorageData.map((file) => {
    //                     if (file.selectedFile) {
    //                         return blobToFile(file.selectedFile, file.fileName,
    //                             file.fileType, file.uploadText, file.postedAt, file.displayComment,
    //                             file.displayLikePopover, file.id, file.comments, file.likes)
    //                     } else return file

    //                 })
    //             )
    //             console.log('localStorge', result);
    //             setNewState(result)
    //         })();
    //     }
    // }, []);
    useEffect(() => {
        /** used promise to first change all the files to blob by using fileReader and resolve to return the value */
        const result = state.map((file) => {
            return new Promise((resolve, reject) => {
                try {
                    if (!file.selectedFile) {
                        const fileDate = [{ ...file }]
                        resolve(fileDate);
                    } else {
                        const reader = new FileReader();
                        reader.onload = () => {
                            const binaryStr = reader.result;
                            const obj = [
                                {
                                    ...file, selectedFile: binaryStr, fileName: file.selectedFile.name,
                                    fileType: file.selectedFile.type, postedAt: file.postedAt
                                },
                            ]
                            resolve(obj);
                        }
                        reader.readAsDataURL(file.selectedFile);
                    }

                } catch (err) {
                    console.log(err)
                }
            })
        });
        /** result return array of fullfilled promises */
        Promise.all(
            result.map((file) => {
                return file.then((eachFile) => eachFile)
            })
        ).then((result) => {
            window.localStorage.setItem(key, JSON.stringify(result.flat()))
        })
    }, [state]);

    return [state, setState];
}
export default useLocalStorageReducer;