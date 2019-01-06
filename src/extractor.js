const axios = require('axios');
const dateTimeApiUrl = 'http://worldclockapi.com/api/json/utc/now';
const hourShiftTime = 2;

function format(number){
    return ('' + number).length == 1 ?
        '0' + number :
        number;
}

function buildDate(date) {
    const day = format(date.getDate());
    const month = format(date.getMonth() + 1);
    return day + '-' + month + '-' + date.getFullYear();
}

function buildTime(date){
    const hours = format(date.getHours());
    const minutes = format(date.getMinutes());
    const seconds = format(date.getSeconds());
    return hours + ':' + minutes + ':' + seconds;
}

async function extractDateTime() {
    const response = await axios(dateTimeApiUrl);
    const date = new Date(response.data.currentDateTime);
    date.setHours(date.getHours() + hourShiftTime);
    
    return {
        date : buildDate(date),
        time : buildTime(date)
    }
}

module.exports = extractDateTime;