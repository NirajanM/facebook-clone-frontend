import React, { useState } from 'react';
interface ILoginProps {
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {
    const [toogleType, setToogleType] = useState<boolean>(true);
    const [uID, setUID] = useState<string>("");
    const [pwd, setPwd] = useState<string>("");
    let dt = new Date();
    return (
        <>
            <div className='flex justify-center items-center flex-col'>
                <div className='text-center py-4 font-black text-xl text-blue-500'>
                    facebook
                </div>

                <form className='flex flex-col justify-center items-center gap-2 w-full max-w-md px-4 text-xs'>
                    <input
                        type={'text'}
                        name="uid"
                        placeholder='Mobile number or email'
                        className='bg-slate-100 border-1 focus:border-yellow-200 rounded-sm py-2 px-4 w-full'
                        value={uID}
                        onChange={(e) => { setUID(e.target.value) }}
                    />

                    <div className='flex w-full'>
                        <input
                            type={toogleType ? "password" : "text"}
                            name="password"
                            placeholder='Password'
                            autoComplete='autoComplete'
                            className='bg-slate-100 border-1 focus:border-yellow-100 rounded-sm py-2 px-4 w-full'
                            value={pwd}
                            onChange={(e) => { setPwd(e.target.value) }}
                        />

                        {
                            (pwd !== "") ? <span
                                className='text-blue-500 font-bold text-center px-4 py-2 bg-slate-100'
                                onClick={() => { setToogleType(!toogleType) }}
                            >{(toogleType) ? "SHOW" : "HIDE"}</span> : null
                        }
                    </div>

                    <button
                        type={'submit'}
                        name="uid"
                        placeholder='Mobile number or email'
                        className='bg-blue-500 text-sm text-white font-black rounded-md py-2 px-4 w-full'
                    >Log in</button>

                    <span
                        className='text-blue-500 text-sm cursor-pointer'
                        onClick={() => { alert("Oh no! so sad") }}
                    >Forgot password?</span>

                    <span>or</span>
                    <div
                        className='w-full px-8'>
                        <button
                            type={'submit'}
                            name="uid"
                            placeholder='Mobile number or email'
                            className=' font-sm text-xs border-2 rounded-md border-slate-300 py-2 px-3 w-full overflow-x-hidden whitespace-nowrap'
                            onClick={() => { alert("any random username and password will work") }}
                        >Create new account</button></div>
                </form>

                <footer className='text-xs my-12 text-slate-400 flex flex-col gap-2 text-center'>
                    <span className='text-slate-400'>This is a clone project by <a href='https://nirajanmalla.com.np' className='text-blue-400'>Nirajan Malla</a>, any username and password will work!</span>
                    <span>
                        Meta &#169; {dt.getFullYear()}
                    </span>
                </footer>
            </div>
        </>
    );
};

export default Login;
