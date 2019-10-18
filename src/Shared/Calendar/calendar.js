import React, {Component} from 'react';
import StudentNavBar from '../Nav/StudentNavBar';
import DesktopCalendar from './components/desktop-calendar/desktop-calendar';
import MobileCalendar from './components/mobile-calendar/mobile-calendar';

// TODO: add conditional for the nav bar (if user===student or if user===teacher)

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: window.innerWidth < 600
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.setState({
            isMobile: window.innerWidth < 600
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    render() {
        const { isMobile } = this.state;
        return(
            <div>
                <StudentNavBar />
                <div>
                    {
                        isMobile ?
                        <MobileCalendar /> :
                        <DesktopCalendar />
                    }
                </div>
            </div>
        )
    }
}