/*  A SAMPLE OF DATE THE COMPONENT WILL RETURN

    Just Now,
    30 seconds ago,
    27 minutes ago
    1 hour ago
    today at 12:03 PM`
    yesterday
    Monday
    June 1st
    June 7th, 2021
 */

function GetTimeAndDate(props) {
    const { date } = props;
    const currentDate = convertMiliSecondToSecond(Date.now());
    const postedDate = convertMiliSecondToSecond(date);
    const localDate = new Date(date)
    const { year, month, day, hour, minute, second } = calculateTimeAndDate(currentDate - postedDate);

    if (year > 0) {
        const formartedDate = dateOrdinal(localDate.getDate());
        const fetchYear = localDate.getFullYear();
        return localDate.toLocaleDateString('en-PK', { month: 'long' }), `${formartedDate}, ${fetchYear}`;
    }
    if (month > 0 || day > 6) {
        const formartedDate = dateOrdinal(localDate.getDate());
        return localDate.toLocaleDateString('en-PK', { month: 'long' }), `${formartedDate}`;
    }
    if (day <= 6 && day > 1) {
        return new Intl.DateTimeFormat('en-PK', { weekday: 'long' }).format(localDate);
    }
    if (day === 1) return ('yesterday')

    if (hour > 12) {
        return `today at ${localDate.toLocaleTimeString('en-PK')}`;
    }
    if (hour <= 12 && hour >= 1) return `${hour} hour${hour === 1 ? '' : 's'} ago`;

    if (minute > 0) return `${minute} minute${minute === 1 ? '' : 's'} ago`

    if (second > 10) return `${second} seconds ago`
    return 'just now';

}

function convertMiliSecondToSecond(value) {
    const miliSecondToSecond = 0.001;
    return value * miliSecondToSecond;
}

function calculateTimeAndDate(timestamp) {
    const data = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
    }
    let remaining = timestamp;
    const secondInYear = 31557600;
    const secondInMonth = 2629800;
    const secondInDay = 86400;
    const secondInHour = 3600;
    const secondInMinute = 60;

    data.year = Math.floor(remaining / secondInYear);
    remaining -= data.minute * secondInYear;

    data.month = Math.floor(remaining / secondInMonth);
    remaining -= data.month * secondInMonth;

    data.day = Math.floor(remaining / secondInDay);
    remaining -= data.day * secondInDay;
    // console.log('day', data.day)
    data.hour = Math.floor(remaining / secondInHour);
    remaining -= data.hour * secondInHour;
    // console.log('hour', data.hour)
    data.minute = Math.floor(remaining / secondInMinute);
    remaining -= data.minute * secondInMinute;

    data.second = Math.floor(remaining);

    return data;
};

function dateOrdinal(number) {
    return number + (31 === number || 21 === number || 1 == number ? "st"
        : 22 == number || 2 == number ? "nd"
            : 23 == number || 3 == number ? "rd"
                : "th")
};

export default GetTimeAndDate;



