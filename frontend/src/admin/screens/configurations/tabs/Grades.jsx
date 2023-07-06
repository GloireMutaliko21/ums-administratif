import React from 'react'
import AjoutGrade from '../adds/AjoutGrade';
import GradesList from '../lists/GradesList';

const Grades = () => {
    return (
        <div className='mt-3 grid grid-cols-3 font-normal'>
            <GradesList />
            <AjoutGrade />
        </div>
    );
}

export default Grades;