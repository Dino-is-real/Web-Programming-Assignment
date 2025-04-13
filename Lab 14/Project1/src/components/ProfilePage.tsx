import ProfileImage from "./ProfileImage";
import UserInfo from "./UserInfo";
import UserPosts from "./UserPosts";

const ProfilePage = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <ProfileImage />
      <UserInfo />
      <UserPosts />
    </div>
  );
};

export default ProfilePage;
