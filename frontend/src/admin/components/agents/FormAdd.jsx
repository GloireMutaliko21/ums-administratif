import { useState } from 'react';

import Input from "../../../components/Input";
import Select from '../../../components/Select';
import { handleChange } from '../../../utils/onChange';
import { permanenceData, privelegeData, sexeData, statutData } from '../../data/SelectData';
import Grades from './Grades';

const FormAdd = () => {
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

    return (
        <div className="flex justify-around">
            <div>
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
                <Grades />
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
            </div>
        </div>
    )
}

export default FormAdd;