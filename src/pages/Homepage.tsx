import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Appbar from "../components/Appbar";
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import GroupsIcon from '@mui/icons-material/Groups';
import Newsfeed from '../components/Newsfeed';
import Friendrequests from '../components/Friendrequests';
import Messages from '../components/Messages';
import Notifications from '../components/Notifications';
import Entertainments from '../components/Entertainments';
import Groups from '../components/Groups';
interface IHomepageProps {
}

const Homepage: React.FunctionComponent<IHomepageProps> = () => {
    const [activeNav, setActiveNav] = useState<number>(1);
    return (
        <div>
            <Appbar />
            <nav className="flex py-3 border border-slate-200 justify-around w-full">
                <Link to="/homepage">
                    <Badge badgeContent={0} color="primary" max={20} onClick={() => { setActiveNav(1) }}>
                        <HomeIcon color={(activeNav === 1) ? "primary" : "action"} />
                    </Badge>
                </Link>
                <Link to="/friendrequests">
                    <Badge badgeContent={3} color="primary" max={20} onClick={() => { setActiveNav(2) }}>
                        <PersonAddOutlinedIcon color={(activeNav === 2) ? "primary" : "action"} />
                    </Badge>
                </Link>
                <Link to="/messages">
                    <Badge badgeContent={2} color="primary" max={20} onClick={() => { setActiveNav(3) }}>
                        <ChatBubbleOutlineIcon color={(activeNav === 3) ? "primary" : "action"} />
                    </Badge>
                </Link>
                <Link to="/entertainments">
                    <Badge badgeContent={3} color="primary" max={20} onClick={() => { setActiveNav(4) }}>
                        <OndemandVideoIcon color={(activeNav === 4) ? "primary" : "action"} />
                    </Badge>
                </Link>
                <Link to="/notifications">
                    <Badge badgeContent={22} color="primary" max={20} onClick={() => { setActiveNav(5) }}>
                        <NotificationsNoneIcon color={(activeNav === 5) ? "primary" : "action"} />
                    </Badge>
                </Link>
                <Link to="/groups">
                    <Badge badgeContent={6} color="primary" max={20} onClick={() => { setActiveNav(6) }}>
                        <GroupsIcon color={(activeNav === 6) ? "primary" : "action"} className="rounded-full border border-slate-500" />
                    </Badge>
                </Link>
            </nav>
            <Routes>
                <Route path="homepage" element={<Newsfeed />} />
                <Route path="friendrequests" element={<Friendrequests />} />
                <Route path="messages" element={<Messages />} />
                <Route path="entertainments" element={<Entertainments />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="groups" element={<Groups />} />
            </Routes>
        </div>
    );
};

export default Homepage;
