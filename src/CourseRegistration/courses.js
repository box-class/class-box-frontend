import React from 'react';
import Course from './course';
import {
  ListWrap,
  HeaderWrap
} from '../Styles/CourseList/courselist';


// props from courselistmain
// courses={this.state.majorData}

const CourseList = (props) => {
  return (
    <ListWrap>
      <HeaderWrap>
        <p></p>
        <h4>Course</h4>
        <p></p>
      </HeaderWrap>
      <div>
        {props.courses.map(course => {
          return <Course key={course.courseId} course={course} />
        })}
      </div>
    </ListWrap>
  )
}

export default CourseList