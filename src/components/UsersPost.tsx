import Post from "./Post";
interface IUsersPostProps {
}

const UsersPost: React.FunctionComponent<IUsersPostProps> = (props) => {
  const UserPostDetails = [
    {
      profile: "/1.webp",
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
      profile: "/3.webp",
      name: "Cristiano Ronaldo",
      privacy: 1,
      posted: "13h",
      postImage: "/2.webp",
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
      profile: "/4.webp",
      name: "Nepathya",
      privacy: 1,
      posted: "21m",
      postImage: "/5.webp",
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
