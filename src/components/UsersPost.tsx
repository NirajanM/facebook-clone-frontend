import Post from "./Post";

interface IUsersPostProps {
}

const UsersPost: React.FunctionComponent<IUsersPostProps> = (props) => {
  const UserPostDetails = [
    {
      profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/172204944_4824527224246699_6918722293347789546_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=1&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoidCJ9&_nc_ohc=uoR8L9ZRJ50AX-5EE3H&tn=SreNJeRuUc7uNJGc&_nc_ht=scontent.fsif1-1.fna&oh=00_AfDuADxuOq71y0_6Oug9eSYKUOeMOrMJ2l1VydRdkl2QHQ&oe=63EED47B",
      name: "Routine Of Nepal Banda",
      privacy: 1,
      posted: "1d",
      postImage: "",
      caption: "Maile ta Anuharbook garey, tapaile ni ?",
      reactions: [
        123,
        24,
        10
      ],
      comments: 20,
      shared: 12
    },
    {
      profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=9XlfE5C5MnsAX8ocxfu&tn=lbg-XjLo8IK3Lred&_nc_ht=scontent.fsif1-1.fna&oh=00_AfCQpEGNS_8BNGhrHmZnIn8utG-JXibE32jSjnkhGzYgAA&oe=63F1DA00",
      name: "Cristiano Ronaldo",
      privacy: 1,
      posted: "13h",
      postImage: "https://scontent.fsif1-1.fna.fbcdn.net/v/t39.30808-6/326207987_690442002579160_1047332579392850160_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=730e14&_nc_ohc=hkjuYVzmDFUAX-C0Cdi&_nc_ht=scontent.fsif1-1.fna&oh=00_AfBhHcBdjJ0T-o5SjjrheclEMguVhTBY_n-nZzgPhIlygA&oe=63CF4101",
      caption: "So happy to be back on the pitch, and on the score sheet!! And nice to see some old friends!👍🏼",
      reactions: [
        9999,
        999,
        99
      ],
      comments: 543,
      shared: 1431
    },
    {
      profile: "https://scontent.fsif1-1.fna.fbcdn.net/v/t1.6435-9/148677740_271496114335795_4694665719681802490_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=mMTxf5z3PCcAX8XDVQh&_nc_ht=scontent.fsif1-1.fna&oh=00_AfA8sNVjzrUhnZEScMM4vBncnBXq9v0BWrvK-8F7Moekkw&oe=63F1DE29",
      name: "Nepathya",
      privacy: 1,
      posted: "21m",
      postImage: "https://scontent.fsif1-1.fna.fbcdn.net/v/t39.30808-6/324713572_730911924900341_2118530590646811969_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wSHsEW8Od5cAX-5-FF2&_nc_oc=AQlpd2BVQWd7tScEYSMv5gu7x38F_VTCtceZGb4YErJA9ipbSn2eaQUNQaeXIoll-N9XTOaiLa2tHXssXswXLHeW&_nc_ht=scontent.fsif1-1.fna&oh=00_AfCyIleiPj-1ejKkdinPiNscl_q7ZlpBA8GZPB1d-98BzQ&oe=63CF902C",
      caption: "नेपथ्य ‘मानवताको लागि संगित’ यात्रा २०२२ मा संलग्न प्राविधिक र व्यवस्थापन टिम सहितको यो सामुहिक तस्बीर… कार्यक्रमको नेपथ्यमा रहेर योगदान पुर्याउने सबैलाई धन्यबाद ।",
      reactions: [
        231,
        120,
        95
      ],
      comments: 125,
      shared: 72
    },
  ]
  return (
    <>
      <div className='py-2'>
        {UserPostDetails.map((singlePost) => {
          return (
            <Post
              profilePicture={singlePost.profile}
              name={singlePost.name}
              posted={singlePost.posted}
              type={singlePost.privacy}
              caption={singlePost.caption}
              postImage={singlePost.postImage}
              comments={singlePost.comments}
              share={singlePost.shared}
              reaction={singlePost.reactions}
            />
          )
        })}
      </div>
    </>
  );
};

export default UsersPost;
