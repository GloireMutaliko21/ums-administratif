
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { BsEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { ToastContainer } from 'react-toastify';

import Button from '../components/Button';
import Input from '../components/Input';
import { useStateContext } from "../context/ContextProvider";
import { handleChange } from "../utils/onChange";
import { handleLogin } from '../api/post';
import ClickLoad from '../components/Loaders/ClickLoad';

const Login = () => {
    const { boolingStates, setUserType, setLoginStatus, rememberMe, setLoginForm } = useStateContext();

    const [username, setusername] = useState();
    const [password, setPassword] = useState('');
    const [inLoading, setInLoading] = useState(false);

    return (
        <div className='flex flex-col justify-center min-w-[400px] max-w-max shadow-gray-200 p-10 text-teal-800 rounded-md text-left'>
            <div className='flex flex-col items-center  mb-5'>
                <p className="text-2xl font-medium">Welcome Back</p>
                <p className="mb-4 text-xs">Entrez vos details SVP !</p>
                <Button
                    icon={<FcGoogle className='text-xl mr-2' />}
                    label='Se connecter avec google'
                    style='text-sky-800 hover:bg-slate-50 text-sm font-medium shadow-md border p-2'
                />
            </div>
            <div className='flex justify-between items-center w-full mb-3 text-center'>
                <div className='border-t w-1/5'></div>
                <span className='text-xs text-teal-500'>OU SE CONNECTER AVEC</span>
                <div className='border-t w-1/5'></div>
            </div>
            <div className=''>
                <Input
                    label='Username'
                    type='text'
                    onChange={(e) => handleChange(e, setusername)}
                    name="username"
                />
                <Input
                    label='Password'
                    type={!boolingStates.showPassword ? 'password' : 'text'}
                    onChange={(e) => handleChange(e, setPassword)}
                    name="password"
                    icon={<BsEyeFill />}
                    iconMask={<BsFillEyeSlashFill />}
                />
            </div>
            <div className='flex justify-between items-center text-xs'>
                <div className='flex justify-around items-center'>
                    <input ref={rememberMe} name='remember' id='remember' type="checkbox" />
                    <label htmlFor='remember' className='ml-3 cursor-pointer'>Remember Me</label>
                </div>
                <div>
                    <span className='text-teal-500 font-semibold hover:underline hover:cursor-pointer'>
                        Forgot password ?
                    </span>
                </div>
            </div>
            <div>
            </div>
            <div className='mt-8'>
                <Button
                    label={inLoading ? <ClickLoad text='Connexion' /> : 'Se connecter'}
                    style='flex justify-center w-full bg-teal-800 hover:bg-teal-700 text-white font-semibold p-3'
                    onClick={() => handleLogin(username, password, rememberMe, setLoginStatus, setUserType, setInLoading)
                    }
                // icon={inLoading ? <ClickLoad /> : ''}
                />
                <ToastContainer />
            </div>
        </div>
    );
}

export default Login;