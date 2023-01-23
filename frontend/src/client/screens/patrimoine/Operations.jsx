import React from 'react'
import AddBien from './components/AddBien';
import AddCategory from './components/AddCategory';

const Operations = () => {
    return (
        <div className='mt-3 grid grid-cols-3 gap-5'>
            <div className='col-span-2'>
                <AddBien />
            </div>
            <div>
                <AddCategory />
            </div>
        </div>
    );
}

export default Operations;