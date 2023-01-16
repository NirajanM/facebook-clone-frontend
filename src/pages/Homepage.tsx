import { useState } from 'react';
import Appbar from "../components/Appbar";
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GroupsIcon from '@mui/icons-material/Groups';
interface IHomepageProps {
}

const Homepage: React.FunctionComponent<IHomepageProps> = () => {
    const [activeNav, setActiveNav] = useState<number>(1);
    return (
        <div>
            <Appbar />
            <nav className="flex py-3 border border-slate-200 justify-around w-full">
                <Badge badgeContent={0} color="primary" max={20} onClick={() => { setActiveNav(1) }}>
                    <HomeIcon color={(activeNav === 1) ? "primary" : "action"} />
                </Badge>
                <Badge badgeContent={0} color="primary" max={20} onClick={() => { setActiveNav(2) }}>
                    <PersonAddOutlinedIcon color={(activeNav === 2) ? "primary" : "action"} />
                </Badge>
                <Badge badgeContent={0} color="primary" max={20} onClick={() => { setActiveNav(3) }}>
                    <ChatBubbleOutlineIcon color={(activeNav === 3) ? "primary" : "action"} />
                </Badge>
                <Badge badgeContent={0} color="primary" max={20} onClick={() => { setActiveNav(4) }}>
                    <OndemandVideoIcon color={(activeNav === 4) ? "primary" : "action"} />
                </Badge>
                <Badge badgeContent={0} color="primary" max={20} onClick={() => { setActiveNav(5) }}>
                    <NotificationsNoneIcon color={(activeNav === 5) ? "primary" : "action"} />
                </Badge>
                <Badge badgeContent={0} color="primary" max={20} onClick={() => { setActiveNav(6) }}>
                    <GroupsIcon color={(activeNav === 6) ? "primary" : "action"} className="rounded-full border border-slate-500" />
                </Badge>
            </nav>
        </div>
    );
};

export default Homepage;
