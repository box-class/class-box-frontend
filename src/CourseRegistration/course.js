import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {
    ListItemWrap,
    ShowMore
  } from '../Styles/CourseList/courselist';
  import down from '../assetts/down.png';
  import DescModal from './DecriptionModal/descModal';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            checked: false,
            showDetails: false,
            currentCourse: {}
        }
    }

    handleChange = name => event => {
      this.setState({
          ...this.state,
          checked: !this.state.checked
      })
    };

    handleShowMore = (e) => {
        this.setState({
            ...this.state,
            showDetails: true,
            currentCourse: this.props.course
        })
    }

    handleShowLess = (e) => {
        this.setState({
            ...this.state,
            showDetails: false,
            currentCourse: {}
        })
    }



    render() {
        return(
            <>
            <ListItemWrap>
                {this.state.showDetails ?
                    <ShowMore onClick={() => this.handleShowLess()}>
                        ^
                    </ShowMore> :
                    <ShowMore onClick={() => this.handleShowMore()}>
                        <img src={down} alt="show more details" />
                    </ShowMore>
                }

                <p>{this.props.course.name}</p>
                <Checkbox
                    id="box"
                    checked={this.state.checked}
                    onChange={this.handleChange()}
                    value="checkedA"
                    inputProps={{
                    'aria-label': 'primary checkbox',
                    }}
                />
            </ListItemWrap>
            {this.state.showDetails ?
                <DescModal course={this.state.currentCourse} /> :
                <></>
            }
            </>
        )
    }
}
