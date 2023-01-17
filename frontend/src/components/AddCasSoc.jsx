import React, { useState } from 'react';

import Button from './Button';
import Input from './Input';
import ClickLoad from './Loaders/ClickLoad';

const AddCasSoc = () => {
    const [inLoading, setInLoading] = useState(false);

    return (
        <div>
            <textarea
                cols="30" rows="5"
                placeholder='Brève description...'
                className='border p-5 resize-none rounded outline-none text-slate-600'
            ></textarea>
            <div>
                <label className='font-bold text-sm'>Date événement</label>
                <div className='bg-gray-200 flex justify-between items-center relative my-2'>
                    <input
                        className={`text-gray-700 text-sm focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block appearance-none w-full`}
                        type='date'
                        // value={value}
                        // onChange={onChange}
                        name='date'
                        min={new Date().toISOString().split('T')[0]}
                    >
                    </input>
                </div>
            </div>
            <Button
                label={inLoading ? <ClickLoad text='Enregistrement' /> : 'Enregistrer'}
                style='flex justify-center w-full bg-sky-500 hover:bg-sky-400 text-white p-3 mt-5'
            // onClick={() => handleLogin(username, password, rememberMe, setLoginStatus, setUserType, setInLoading)}
            // icon={inLoading ? <ClickLoad /> : ''}
            />
        </div>
    );
}

export default AddCasSoc;