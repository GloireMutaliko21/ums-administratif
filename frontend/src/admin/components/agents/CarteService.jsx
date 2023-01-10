
import React from 'react';

const CarteService = React.forwardRef((props, ref) => {

    return (
        <div ref={ref} className=''>
            <div className='text-center font-serif font-bold w-full border-b-2 text-teal-500 border-slate-700'>
                <p>Université de Goma</p>
            </div>
            <div className='flex mt-1 font-mono text-[10px] items-center'>
                <div>
                    <img src={props.imageUrl} alt="" className='w-20 h-24 object-cover' />
                </div>
                <div className='ml-2'>
                    <p>Noms</p>
                    <p>Matricule</p>
                    <p>Grade</p>
                    <p>Permanence</p>
                    <p>Statut</p>
                    <p>Téléphone</p>
                </div>
                <div className='ml-5'>
                    <p>: {props.nom} {props.postnom} {props.prenom}</p>
                    <p>: {props.matricule}</p>
                    <p>: {props.grade}</p>
                    <p>: {props.permanence}</p>
                    <p>: {props.statut}</p>
                    <p>: {props.telephone}</p>
                </div>
            </div>
            <div className='flex justify-between items-center mb-10'>
                <div className='flex flex-col justify-between items-center content-center text-[8px] font-mono'>
                    <p className='mb-7 mt-2'>Le Secrétaire Général Administratif</p>
                    <p>Prof. Gloire Mutaliko</p>
                </div>
                {props.qrcode}
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col justify-between items-center content-center text-[8px] font-mono'>
                    <p className='mb-7 mt-2'>Le Secrétaire Général Administratif</p>
                    <p>Prof. Gloire Mutaliko</p>
                </div>
                {props.qrcode}
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col justify-between items-center content-center text-[8px] font-mono'>
                    <p className='mb-7 mt-2'>Le Secrétaire Général Administratif</p>
                    <p>Prof. Gloire Mutaliko</p>
                </div>
                {props.qrcode}
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col justify-between items-center content-center text-[8px] font-mono'>
                    <p className='mb-7 mt-2'>Le Secrétaire Général Administratif</p>
                    <p>Prof. Gloire Mutaliko</p>
                </div>
                {props.qrcode}
            </div>
        </div>
    );
});

export default CarteService;