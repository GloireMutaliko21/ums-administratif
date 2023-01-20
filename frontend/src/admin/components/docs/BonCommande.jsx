import { forwardRef } from 'react';

const BonCommande = forwardRef((props, ref) => {
    return (
        <div ref={ref} className='text-sm'>
            <div className='border-b-2 font-sans font-bold w-full text-center'>
                <h1>Bon de commande... {props.article}</h1>
            </div>
            <div className='flex gap-3 text-sm mt-10'>
                <p>Quantité :</p>
                <p>{props.quantite}</p>
            </div>
        </div>
    );
});

export default BonCommande;