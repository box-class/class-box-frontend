const monthTranslationTable = [
    {num: 0, month: 'January', days: 31},
    {num: 1, month: 'February', days: 28},
    {num: 2, month: 'March', days: 31},
    {num: 3, month: 'April', days: 30},
    {num: 4, month: 'May', days: 31},
    {num: 5, month: 'June', days: 30},
    {num: 6, month: 'July', days: 31},
    {num: 7, month: 'August', days: 31},
    {num: 8, month: 'September', days: 30},
    {num: 9, month: 'October', days: 31},
    {num: 10, month: 'November', days: 30},
    {num: 11, month: 'December', days: 31}
]

const dayTranslationTable = [
    {num: 0, dayOfWeek: 'Sunday', abbr: 'SN'},
    {num: 1, dayOfWeek: 'Monday', abbr: 'M'},
    {num: 2, dayOfWeek: 'Tuesday', abbr: 'T'},
    {num: 3, dayOfWeek: 'Wednesday', abbr: 'W'},
    {num: 4, dayOfWeek: 'Thursday', abbr: 'TH'},
    {num: 5, dayOfWeek: 'Friday', abbr: 'F'},
    {num: 6, dayOfWeek: 'Saturday', abbr: 'S'},
]

export const createMonthArray = (start, end) => {
    const startIndex = 7 - start;
    let num = 0;
    const calendarArray = [
        { row: [...Array(7).keys()].map((r, i) => {
            if(i <= startIndex) return r = null
            num++
            return r = num
        }) },
        { row: [...Array(7).keys()].map(r => {
            num++
            return r = num
        }) },
        { row: [...Array(7).keys()].map(r => {
            num++
            return r = num
        }) },
        { row: [...Array(7).keys()].map(r => {
            num++
            return r = num
        }) },
        { row: [...Array(7).keys()].map((r, i) => {
            if (i > end) return r = null
            num++
            return r = num
        }) }
    ]

    return calendarArray
};



export const convertMonthId = (code) => {
    const newMonth = monthTranslationTable.filter(i => {
        return i.num === code
    });
    return(newMonth[0].month);
}

export const getNumberOfDays = (code) => {
    const newMonth = monthTranslationTable.filter(i => {
        return i.num === code
    });
    return(newMonth[0].days);
}

export const getDayOfWeek = (code) => {
    const newDay = dayTranslationTable.filter(i => {
        return i.num === code
    });
    return(newDay[0].dayOfWeek)
}

export const getDowCode = (day) => {
    const newCode = dayTranslationTable.filter(i => {
        return i.abbr === day
    });
    return(newCode[0].num)
}