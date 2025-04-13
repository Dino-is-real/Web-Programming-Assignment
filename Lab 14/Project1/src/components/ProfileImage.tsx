import profilePic from "./pfp.png";

const ProfileImage = () => {
  return (
    <div>
      <img 
        src={profilePic} 
        alt="User Profile" 
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
      />
    </div>
  );
};

export default ProfileImage;
