import React from 'react'
import AjoutCategArticle from '../adds/AjoutCategArticle';
import CategArticlList from '../lists/CategArticlList';

const CategArticle = () => {
    return (
        <div className='mt-3 flex justify-around'>
            <CategArticlList />
            <AjoutCategArticle />
        </div>
    );
}

export default CategArticle;