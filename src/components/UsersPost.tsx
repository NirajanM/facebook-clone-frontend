import * as React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface IUsersPostProps {
}

const UsersPost: React.FunctionComponent<IUsersPostProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const UserPostDetails = [
    {
      profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/172204944_4824527224246699_6918722293347789546_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=1&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=uoR8L9ZRJ50AX-5EE3H&tn=SreNJeRuUc7uNJGc&_nc_ht=scontent.fsif1-1.fna&oh=00_AfDuADxuOq71y0_6Oug9eSYKUOeMOrMJ2l1VydRdkl2QHQ&oe=63EED47B",
      name: "Routine Of Nepal Banda",
      privacy: 1,
      posted: "1 d",
      caption: "Maile ta Anuharbook garey, tapaile ni ?",
      reactions: [
        123,
        24,
        10
      ],
      comments: 0,
      shared: 124
    }
  ]
  return (
    <>
      <div className='py-2'>
        <div>


          <div className='flex justify-between gap-2 px-2 text-xs font-black text-slate-800'>
            <div className='flex items-center gap-1'>
              <img src='https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/172204944_4824527224246699_6918722293347789546_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=1&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=uoR8L9ZRJ50AX-5EE3H&tn=SreNJeRuUc7uNJGc&_nc_ht=scontent.fsif1-1.fna&oh=00_AfDuADxuOq71y0_6Oug9eSYKUOeMOrMJ2l1VydRdkl2QHQ&oe=63EED47B' alt='ronb' className="rounded-full h-8 w-8" />
              <div className='flex flex-col items-start'>
                <span>Routine Of Nepal Banda</span>
                <div className=' text-slate-400 font-medium'>
                  <span>1 d</span>
                  <span className='pl-2'>public</span>
                </div>
              </div>
            </div>

            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              className="flex items-start"
            >
              <MoreHorizIcon color='action' />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Save post</MenuItem>
              <MenuItem onClick={handleClose}>Hidepost</MenuItem>
              <MenuItem onClick={handleClose}>Snooze for 30 days</MenuItem>
              <MenuItem onClick={handleClose}>Hide all from Routine of nepal banda</MenuItem>
              <MenuItem onClick={handleClose}>Find support or report post</MenuItem>
              <MenuItem onClick={handleClose}>Turn off notification for this post</MenuItem>
            </Menu>
          </div>

          <div className='px-2 pt-3 text-xs text-black font-light'>
            <span>Maile ta Anuharbook garey, tapaile ni ?</span>
            <img src='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersPost;
