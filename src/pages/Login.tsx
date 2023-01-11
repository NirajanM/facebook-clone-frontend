import * as React from 'react';
import { TextField } from '@mui/material';
interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    return (
        <>
            <div className='flex justify-center items-center flex-col'>
                <div className='text-center py-4 font-black text-xl text-blue-600'>
                    facebook
                </div>
                <form className='flex flex-col justify-center items-center gap-2'>
                    <TextField name="uid" variant="outlined" placeholder='Mobile number or email' size='small' fullWidth />
                    <TextField name="password" variant="outlined" type="password"
                        autoComplete="current-password" placeholder='Password' size='small' fullWidth />
                </form>
            </div>
        </>
    );
};

export default Login;
