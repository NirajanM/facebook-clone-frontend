import { useState } from "react"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShortcutOutlinedIcon from '@mui/icons-material/ShortcutOutlined';

import * as React from 'react';

interface IPostProps {
    profilePicture: string;
    name: string;
    posted: string;
    type: number;
    caption: string;
    postImage: string;
    comments: number;
    share: number;
    reaction: number[];
}

const Post: React.FunctionComponent<IPostProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [liked, setLiked] = useState<boolean>(false);
    return (
        <div className="my-8 rounded-lg max-w-xl m-auto">


            <div className='flex justify-between gap-2 px-2 text-xs font-black text-slate-800'>
                <div className='flex items-center gap-1'>
                    <img src={props.profilePicture} alt={props.name} className="rounded-full h-8 w-8" />
                    <div className='flex flex-col items-start'>
                        <span>{props.name}</span>
                        <div className=' text-slate-400 font-medium'>
                            <span>{props.posted}</span>
                            <span className='pl-2'>{(props.type === 1) ? "public" : "private"}</span>
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
                <span>{props.caption}</span>
            </div>

            <a href={props.postImage}>
                <img src={props.postImage} className='w-full max-w-xl m-auto' />
            </a>
            <div className="px-2">
            </div>

            <div className='flex gap-2 px-2 py-2 border-y my-2'>
                <span className='flex justify-center gap-1 items-center py-1 text-xs rounded-full cursor-pointer w-full bg-slate-200'
                    onClick={() => { setLiked(!liked) }}
                ><ThumbUpAltOutlinedIcon color={liked ? "primary" : "action"} fontSize='small' />{props.reaction[0] + props.reaction[1] + props.reaction[2]}k</span>
                <span className='flex justify-center gap-1 items-center py-1 text-xs rounded-full cursor-pointer w-full bg-slate-200'
                    onClick={() => { alert("kasle garxa yar comment?") }}
                ><ChatBubbleOutlineOutlinedIcon color='action' fontSize='small' />{props.comments}k</span>
                <span className='flex justify-center gap-1 items-center py-1 cursor-pointer text-xs rounded-full w-full bg-slate-200'
                    onClick={() => { alert("kasle herxa share garera chai?") }}
                ><ShortcutOutlinedIcon color='action' fontSize='small' />{props.share}k</span>
            </div>
        </div>
    );
};

export default Post;
