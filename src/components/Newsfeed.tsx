import Avatar from '@mui/material/Avatar';
import Profile from "../assets/profile.webp";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import Stories from './Stories';
import UsersPost from './UsersPost';
interface INewsfeedProps {
}

const Newsfeed: React.FunctionComponent<INewsfeedProps> = (props) => {
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

    return (
        <>
            <div className='flex px-3 py-3 justify-between gap-3'>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src={Profile} sizes="sm" />
                </StyledBadge>
                <button className='rounded-full px-4 py-1 bg-slate-200 text-sm font-medium w-full text-start'
                    onClick={() => { alert("timro mind mai rahana deu aile lai") }}
                >
                    What's on your mind?
                </button>
                <div className='flex flex-col items-center' >
                    <PhotoSizeSelectActualIcon />
                    <span className='text-xs'>Photo</span>
                </div>
            </div>
            <Stories />
            <UsersPost />
        </>
    );
};

export default Newsfeed;
