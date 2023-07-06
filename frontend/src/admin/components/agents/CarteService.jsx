
import React from 'react';

import unigomLogo from "../../../../public/images/istm2.jpg";

const CarteService = React.forwardRef((props, ref) => {
    const nomComplet = `${props.nom} ${props.postnom} ${props.prenom}`

    return (
        <div ref={ref} className=''>
            <div className='text-center font-serif font-bold w-full border-b-2 text-sky-500 border-slate-700'>
                <p>ISTM - GOMA</p>
                <p className='text-xs text-gray-700'>Institut Supérieur des Techniques Médical de Goma</p>
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
                <div className='ml-2'>
                    <p className=''>: {nomComplet.substring(0, 24)}.</p>
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
            <div className='text-center flex flex-col justify-center content-center'>
                <div className='font-sans font-black text-2xl'>
                    <p>ISTM - GOMA</p>
                </div>
                <div className='flex flex-col justify-between items-center content-center text-[8px] font-mono'>
                    <img src={unigomLogo} alt="" className='object-cover h-24 w-24' />
                </div>
                <div>
                    <p className='font-sans underline font-bold text-sky-600'>CARTE DE SERVICE</p>
                </div>
                <div className='text-[9px] content-center text-center mt-4 italic font-serif'>
                    <p className=''>Les autorités civiles et militaires sont priées</p>
                    <p className=''>d'apporter assistance au porteur de la présente</p>
                </div>
            </div>
        </div>
    );
});

export default CarteService;