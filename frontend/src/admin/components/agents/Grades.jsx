import { useEffect } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { GRADE_BASE_URL } from '../../../utils/constants';
import { handleChange } from '../../../utils/onChange'

const Grades = ({ gradeId, setGradeId }) => {
    const { localUserData, grades, setGrades } = useStateContext();

    useEffect(() => {
        handleGet(localUserData?.token, `${GRADE_BASE_URL}`, setGrades, 'grades');
    }, []);

    return (
        <select
            value={gradeId}
            onChange={(e) => handleChange(e, setGradeId)}
            className="w-full text-gray-700 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 mt-[5px] px-4 block"
        >
            <option value="" disabled hidden>Grade</option>
            {grades?.data?.map((option) =>
                <option
                    key={option.id}
                    value={`${option.id}`}
                    className='capitalize'
                >
                    {option.titre}
                </option>
            )}
        </select>
    )
}

export default Grades