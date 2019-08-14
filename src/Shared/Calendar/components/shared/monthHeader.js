import React, { Component } from 'react';
import { convertMonthId } from '../../../util';
import left from '../../../../assetts/left.png';
import right from '../../../../assetts/right.png';
import {
    CalendarHeaderWrap,
    HeaderWrap,
    MonthWrap
} from '../../../../Styles/Calendar/calendar-header';

export default class Month extends Component {
    constructor(props) {
        super(props);
        this.state = {
            month: '',
        }
    }

    componentDidMount() {
        const tempMonth = new Date().getMonth();
        const newMonth = convertMonthId(tempMonth);

        this.setState({
            ...this.state,
            month: newMonth
        })
    }

    render() {
        console.log(this.state.month)
        return(
            <CalendarHeaderWrap>
                <HeaderWrap>
                    <div>
                        <img src={left} alt='left' />
                    </div>
                    <MonthWrap>
                        <h3>{this.state.month}</h3>
                    </MonthWrap>
                    <div>
                        <img src={right} alt='right' />
                    </div>
                </HeaderWrap>
            </CalendarHeaderWrap>
        )
    }
}