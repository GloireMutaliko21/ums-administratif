import React, { useState } from 'react';

import AjoutCategArticle from '../adds/AjoutCategArticle';
import CategArticlList from '../lists/CategArticlList';

const CategArticle = () => {
    const [fetchCateg, setFetchCateg] = useState(true);
    const [categList, setCategList] = useState();

    return (
        <div className='mt-3 grid grid-cols-2 font-normal'>
            <CategArticlList
                fetchCateg={fetchCateg}
                setFetchCateg={setFetchCateg}
                categList={categList}
                setCategList={setCategList}
            />
            <AjoutCategArticle
                fetchCateg={fetchCateg}
                setFetchCateg={setFetchCateg}
                categList={categList}
                setCategList={setCategList}
            />
        </div>
    );
}

export default CategArticle;