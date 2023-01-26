import React from 'react'
import AjoutUnitGestion from '../adds/AjoutUnitGestion';
import UnitGestList from '../lists/UnitGestList';

const UnitGestion = () => {
    return (
        <div className='mt-3 flex justify-around'>
            <UnitGestList />
            <AjoutUnitGestion />
        </div>
    );
}

export default UnitGestion;