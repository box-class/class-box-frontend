import React, {Component} from 'react';
import { CalItem } from '../../../../Styles/Calendar/calendar-rows';
import SingleDay  from './single-day';


// props from create-grid
// rowData={row}
// startDow={startDayCode}
// endDow={endDateCode}

export default class CreateRows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date().getUTCDate(),
            clickedDate: null
        }
    }

    handleSelectDay = (day) => {
        this.setState({
            ...this.state,
            clickedDate: day
        });
    }

    render() {
        return(
            <>
                {this.props.rowData.row.map((day, i) => {
                    return (
                        <CalItem key={i} active={day === this.state.currentDate ? true : false} >
                            <SingleDay day={day} handleSelectDay={this.handleSelectDay} />
                        </CalItem>
                    )
                })}
            </>
        )
    }
}