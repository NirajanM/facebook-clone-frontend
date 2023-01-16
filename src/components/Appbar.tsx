import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchAppBar() {
    return (
        <AppBar position="static" color='inherit'>
            <Toolbar className='flex justify-between items-center '>
                <span className='font-black text-2xl text-blue-600'>
                    facebook
                </span>
                <div >
                    <SearchIcon className='rounded-full bg-slate-200 p-1' fontSize='large' />
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon fontSize='large' className='rounded-full bg-slate-200 p-1' />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    );
}