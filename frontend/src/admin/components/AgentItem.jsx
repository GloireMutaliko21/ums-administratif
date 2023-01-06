import React from 'react'

const AgentItem = ({ matricule, nom, postnom, prenom, statut, titre }) => {
    return (
        <article className='flex justify-around w-full'>
            <p>{matricule}</p>
            <p>{nom}</p>
            <p>{postnom}</p>
            <p>{prenom}</p>
            <p>{statut}</p>
            <p>{titre}</p>
        </article>
    )
}

export default AgentItem