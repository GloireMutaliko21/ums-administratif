import HeaderListe from './salaireComponents/HeaderListe';
import TabListePaie from './salaireComponents/TabListePaie';


const ListePaie = () => {
    return (
        <div className='mr-[310px] mb-44 relative'>
            <div>
                <HeaderListe />
            </div>
            <div>
                <TabListePaie />
            </div>
        </div>
    );
}

export default ListePaie;