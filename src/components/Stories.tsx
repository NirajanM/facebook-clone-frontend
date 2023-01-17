import Profile from "../assets/profile.webp";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Stories.css'
interface IStoriesProps {
}

const Stories: React.FunctionComponent<IStoriesProps> = (props) => {
    return (
        <div className='flex overflow-x-scroll text-center border-y-4 border-slate-300 p-2 '>
            <div className='text-center h-40 rounded-xl border-2 w-24'>
                <img src={Profile} alt="profile" height={28} className="rounded-t-xl" />
                <div className="flex flex-col items-center">
                    <AddCircleIcon color="primary" className="border-2 bg-white border-white rounded-full" id="circle" />
                    <span className="px-4 pb-8 font-black text-xs text-slate-800">Add to story</span>
                </div>
            </div>
        </div>
    );
};

export default Stories;
