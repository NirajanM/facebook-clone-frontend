import Profile from "../assets/profile.webp";
interface IStoryProps {
}

const Story: React.FunctionComponent<IStoryProps> = (props) => {
    return (
        <div className='overflow-hidden bg-slate-700 flex flex-col items-center justify-center h-40 rounded-xl border-2 w-24'>
            <img src={Profile} alt="profile" width="full" />
        </div>
    );
};

export default Story;