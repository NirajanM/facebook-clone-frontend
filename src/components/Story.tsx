interface IStoryProps {
    image: string;
    name: string;
}

const Story: React.FunctionComponent<IStoryProps> = (props) => {
    return (
        <div className='overflow-hidden flex-shrink-0 bg-slate-800 flex flex-col justify-between h-40 rounded-xl border-2 w-24'>
            <img src={props.image} alt="profile" width={96} className="min-w-24" />
            <span className="text-xs text-white relative bottom-1 whitespace-nowrap overflow-x-hidden">{props.name}</span>
        </div>
    );
};

export default Story;