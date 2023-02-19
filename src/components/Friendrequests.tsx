import ReceivedRequest from "./ReceivedRequest";

interface IFriendrequestsProps {
}

const Friendrequests: React.FunctionComponent<IFriendrequestsProps> = (props) => {
    const receivedReqData = [
        {
            profile: "/1.webp",
            name: "Routine Of Nepal Banda",
            mutual: 4,
        },
        {
            profile: "/3.webp",
            name: "Cristiano Ronaldo",
            mutual: 10,
        },
        {
            profile: "/4.webp",
            name: "Nepathya",
            mutual: 122,
        },
    ]

    const friendSuggestions = [

    ]
    return (
        <div className='p-2'>
            <div className='text-lg font-black py-2 border-y'>Friend Requests</div>
            {receivedReqData.map((eachRequest) => {
                return (
                    <ReceivedRequest image={eachRequest.profile} name={eachRequest.name} mutual={eachRequest.mutual} />
                )
            })}
        </div>
    );
};

export default Friendrequests;
