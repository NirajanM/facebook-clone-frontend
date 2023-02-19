import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
export default function SearchAppBar() {
    return (
        <div className='flex justify-between items-center px-3 py-1'>
            <span className='font-black text-2xl text-blue-600'>
                facebook
            </span>
            <div className='flex gap-2'>
                <SearchIcon className='rounded-full bg-slate-200 p-1' fontSize='large' onClick={() => { alert("xaina data kei xaddeu") }} />
                <Link to="/">
                    <LogoutIcon fontSize='large' className='rounded-full bg-slate-200 p-2' />
                </Link>
            </div>
        </div>
    );
}