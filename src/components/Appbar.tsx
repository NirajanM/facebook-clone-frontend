import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchAppBar() {
    return (
        <div className='flex justify-between items-center px-3 py-1'>
            <span className='font-black text-2xl text-blue-600'>
                facebook
            </span>
            <div className='flex gap-2'>
                <SearchIcon className='rounded-full bg-slate-200 p-1' fontSize='large' />
                <MenuIcon fontSize='large' className='rounded-full bg-slate-200 p-1' />
            </div>
        </div>
    );
}