import React from 'react'
import AjoutGrade from '../adds/AjoutGrade';
import GradesList from '../lists/GradesList';

const Grades = () => {
    return (
        <div className='mt-3 flex justify-around'>
            <GradesList />
            <AjoutGrade />
        </div>
    );
}

export default Grades;