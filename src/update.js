const { exec } = require('child_process');
const extractDateTime = require('./extractor');

(async () => {
    const dateTime = await extractDateTime();

    exec('date ' + dateTime.date, dateError => {
        if (dateError)
            throw dateError;

        exec('time ' + dateTime.time, timeError => {
            if (timeError)
                throw timeError;
        });
    });
})();