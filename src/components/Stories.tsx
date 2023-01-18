import Profile from "../assets/profile.webp";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import './Stories.css'
import Story from "./Story";
interface IStoriesProps {
}

const Stories: React.FunctionComponent<IStoriesProps> = (props) => {
    const stories = [
        {
            image: "https://media.allure.com/photos/625449a82c7474034bf4b5f8/2:3/w_1332,h_1998,c_limit/blackpink%20jennie%20kim.jpg",
            name: "Jenny Kim"
        },
        {
            image: "https://i.pinimg.com/originals/c2/81/e8/c281e883fcd89408574e6edddba374fc.png",
            name: "Elon Musk"
        },
        {
            image: "https://i.pinimg.com/originals/8b/c7/d6/8bc7d63ea6ecb98eb6dd9319f7295fdc.jpg",
            name: "Cristiano Ronaldo"
        },
        {
            image: "https://i.pinimg.com/originals/5d/e0/4f/5de04f0d93fb225dfc4cf55969c3dd0d.jpg",
            name: "Lionel Messi"
        }
    ]
    return (
        <div className='flex overflow-x-auto text-center gap-2 border-y-4 border-slate-300 p-2 '>
            <div className='text-center flex-shrink-0 overflow-hidden h-40 rounded-xl border-2 w-24'>
                <img src={Profile} alt="profile" height={28} />
                <div className="flex flex-col items-center">
                    <AddCircleIcon color="primary" className="border-2 bg-white border-white rounded-full" id="circle" />
                    <span className="px-4 font-black text-xs text-slate-800">Add to story</span>
                </div>
            </div>
            {stories.map((sto, key) => {
                return (
                    <Story image={sto.image} name={sto.name} key={key} />
                );
            })}
        </div>
    );
};

export default Stories;
