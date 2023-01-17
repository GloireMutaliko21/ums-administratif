import React from 'react'
import { useStateContext } from '../context/ContextProvider';
import AddCasSoc from './AddCasSoc';
import Button from './Button';
import Popup from './Popup';

const CassocHeader = () => {
    const { showPopup, setShowPopup } = useStateContext();

    return (
        <div className='fixed z-20 -mt-6 pt-5 bg-white left-60 right-5 flex justify-between items-center'>
            <h1 className='text-4xl font-extrabold'>Cas sociaux</h1>
            <Button
                label='Ajouter'
                style={`flex gap-2 items-center bg-white text-sky-600 border border-sky-500 hover:bg-sky-500 hover:text-white px-8 py-px rounded-sm shadow-md shadow-sky-100`}
                onClick={() => setShowPopup('addCasSoc')}
            />
            {
                showPopup === 'addCasSoc' &&
                <Popup
                    titre='Ajouter un cas social'
                    children={<AddCasSoc />}
                />
            }
        </div>
    )
}

export default CassocHeader;