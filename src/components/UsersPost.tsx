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
    }
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
