import ReceivedRequest from "./ReceivedRequest";

interface IFriendrequestsProps {
}

const Friendrequests: React.FunctionComponent<IFriendrequestsProps> = (props) => {
    const receivedReqData = [
        {
            profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/172204944_4824527224246699_6918722293347789546_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=1&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=uoR8L9ZRJ50AX-5EE3H&tn=SreNJeRuUc7uNJGc&_nc_ht=scontent.fsif1-1.fna&oh=00_AfDuADxuOq71y0_6Oug9eSYKUOeMOrMJ2l1VydRdkl2QHQ&oe=63EED47B",
            name: "Routine Of Nepal Banda",
        },
        {
            profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9XlfE5C5MnsAX8ocxfu&tn=lbg-XjLo8IK3Lred&_nc_ht=scontent.fsif1-1.fna&oh=00_AfCQpEGNS_8BNGhrHmZnIn8utG-JXibE32jSjnkhGzYgAA&oe=63F1DA00",
            name: "Cristiano Ronaldo",
        },
        {
            profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/148677740_271496114335795_4694665719681802490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mMTxf5z3PCcAX8XDVQh&_nc_ht=scontent.fsif1-1.fna&oh=00_AfA8sNVjzrUhnZEScMM4vBncnBXq9v0BWrvK-8F7Moekkw&oe=63F1DE29",
            name: "Nepathya",
        },
    ]

    const friendSuggestions = [

    ]
    return (
        <div className='p-2'>
            <div className='text-lg font-black py-2 border-y'>Friend Requests</div>
            {receivedReqData.map((eachRequest) => {
                return (
                    <ReceivedRequest image={eachRequest.profile} name={eachRequest.name} />
                )
            })}
        </div>
    );
};

export default Friendrequests;
