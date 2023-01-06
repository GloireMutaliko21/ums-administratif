import { useState } from 'react';

import Input from "../../../components/Input";
import Select from '../../../components/Select';
import { handleChange } from '../../../utils/onChange';
import { permanenceData, privelegeData, sexeData, statutData } from '../../data/SelectData';
import Grades from './Grades';
import PickFile from './PickFile';
import defaultProfile from '../../../../public/images/defaultPrfl.png';
import Button from '../../../components/Button';
import { handlePost } from '../../../api/post';
import { AGENT_BASE_URL } from '../../../utils/constants';
import ClickLoad from '../../../components/Loaders/ClickLoad';
import { ToastContainer } from 'react-toastify';

const FormAdd = () => {
    const [inLoading, setInLoading] = useState(false);

    const [matricule, setMatricule] = useState('');
    const [nom, setNom] = useState('');
    const [postnom, setPostnom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [sexe, setSexe] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [statut, setStatut] = useState('');
    const [permanence, setPermanence] = useState('');
    const [typeAgent, setTypeAgent] = useState('');
    const [gradeId, setGradeId] = useState('');
    const [defaultUserImage, setDefaultUserImage] = useState(defaultProfile);
    const [selectedFile, setSelectedFile] = useState();

    const body = {
        matricule, nom, postnom, prenom, sexe, username, password, statut, permanence, typeAgent, gradeId, selectedFile
    };

    const formdata = new FormData();
    formdata.append('matricule', matricule);
    formdata.append('nom', nom);
    formdata.append('postnom', postnom);
    formdata.append('prenom', prenom);
    formdata.append('sexe', sexe);
    formdata.append('username', username);
    formdata.append('password', password);
    formdata.append('statut', statut);
    formdata.append('permanence', permanence);
    formdata.append('privilege', typeAgent);
    formdata.append('gradeId', gradeId);
    formdata.append('imageUrl', selectedFile);

    return (
        <div className="flex justify-around">
            <div>
                <div>
                    <PickFile
                        defaultUserImage={defaultUserImage}
                        setDefaultUserImage={setDefaultUserImage}
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                    />
                </div>
                <Input
                    placeholder='Matricule'
                    name='matricule'
                    type='text'
                    onChange={(e) => handleChange(e, setMatricule)}
                />
                <Input
                    placeholder='Nom'
                    name='nom'
                    type='text'
                    onChange={(e) => handleChange(e, setNom)}
                />
                <Input
                    placeholder='Postnom'
                    name='postnom'
                    type='text'
                    onChange={(e) => handleChange(e, setPostnom)}
                />
                <Input
                    placeholder='Prenom'
                    name='prenom'
                    type='text'
                    onChange={(e) => handleChange(e, setPrenom)}
                />
                <Select
                    data={sexeData}
                    label='Sexe'
                    value={sexe}
                    onChange={(e) => handleChange(e, setSexe)}

                />
            </div>

            <div>
                <Grades
                    gradeId={gradeId}
                    setGradeId={setGradeId}
                />
                <Select
                    data={statutData}
                    label='Statut'
                    value={statut}
                    onChange={(e) => handleChange(e, setStatut)}
                />
                <Select
                    data={permanenceData}
                    label='Permanence'
                    value={permanence}
                    onChange={(e) => handleChange(e, setPermanence)}
                />
                <Select
                    data={privelegeData}
                    label='Type Agent'
                    value={typeAgent}
                    onChange={(e) => handleChange(e, setTypeAgent)}
                />
                <Input
                    placeholder="Nom d'utilisateur"
                    name='username'
                    type='text'
                    onChange={(e) => handleChange(e, setUsername)}
                />
                <Input
                    placeholder="Mot de passe"
                    name='password'
                    type='password'
                    onChange={(e) => handleChange(e, setPassword)}
                />
                <Button
                    label={inLoading ? <ClickLoad text='Connexion' /> : 'Enregistrer'}
                    style='flex justify-center w-full bg-teal-800 hover:bg-teal-700 text-white font-semibold p-3'
                    onClick={() => {
                        handlePost('', formdata, `${AGENT_BASE_URL}/new`, 'multipart/form-data', () => { }, '', setInLoading);
                        console.log(body);
                    }}
                />
            </div>
            <ToastContainer />
        </div>
    )
}

export default FormAdd;