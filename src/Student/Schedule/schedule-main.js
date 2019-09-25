import React, { useEffect, useState } from 'react';
import { userData } from '../../data';
import ScheduleItems from './schedule-items';

const ScheduleMain = (props) => {
    const [schedule, setSchedule] = useState([]);
    let todaysDate = new Date();
    todaysDate = `${todaysDate.getMonth()}/${todaysDate.getDate()}/${todaysDate.getFullYear()}`

    useEffect(() => {
        initSchedule()
    }, []);

    const initSchedule = () => {
        userData.schedule.map((item, index) => {
            return getFullListOfDates(item.startDate, item.endDate, index)
        });
        let today = getTodaysSchedule();
        let tempTasks = []
        today.forEach(task => {
            tempTasks.push(getTasks(task.id))
        });
        setSchedule(tempTasks)
    }

    const getFullListOfDates = (start, end, index) => {
        const interval = 1000 * 60 * 60 * 24;
        const duration = end - start;
        const steps = duration / interval;
        const data = Array.from({length: steps+1}, (v,i) => new Date(start.valueOf() + (interval * i)))
        userData.schedule[index].days.map(i => {
            const newDates = data.filter(item => {
                return item.getDay() === i
            })
            return userData.schedule[index].dates.push(newDates)
        })
    }

    const getTodaysSchedule = () => {
        const todays = userData.schedule.map(item => {
            let dates = item.dates.map(date => {
                const dateFinal = date.filter(d => {
                    d = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`
                    return d === todaysDate
                })
                return dateFinal
            })
            let dateArr = []
            dates.map(day => {
                return dateArr.push(...day)
            })
            return {date: dateArr, id: item.id}
        })
        const finalDates = todays.filter(x => {
            return x.date.length > 0
        })
        return finalDates
    }

    const getTasks = (id) => {
        let tasks = userData.schedule.filter(task => {
            return task.id === id
        })
        return tasks
    }

    console.log(schedule)
    return (
        <div>
            <ScheduleItems data={schedule && schedule} />
        </div>
    )
}

export default ScheduleMain