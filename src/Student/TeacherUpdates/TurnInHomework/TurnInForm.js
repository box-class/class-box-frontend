import React from 'react';
import {
    FormWrap,
    ButtonWrap
} from '../../../Styles/TeacherUpdates/student/turn-in-styles';

const TurnInForm = (props) => {
    const { hwk, handleChange, handleSubmit } = props;

    return (
        <FormWrap onSubmit={handleSubmit}>
            <textarea rows="6" placeholder="Comments"/>
            {hwk && hwk ? <p>Current File: {hwk && hwk}</p> : <p></p>}
            <ButtonWrap>
                <label>
                    Choose file...
                    <input
                        onChange={handleChange}
                        type='file'
                        name='hwk'
                        value={hwk || ''}
                        accept='.pdf'
                        className='custom'
                    />
                </label>
                <button type='submit'>Submit</button>
            </ButtonWrap>

        </FormWrap>
    )
}

export default TurnInForm