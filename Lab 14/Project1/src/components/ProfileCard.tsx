const ProfileCard = () => {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", 
        backgroundColor: "#121212", 
      }}>
        <div style={{
          textAlign: "center",
          backgroundColor: "#1e1e1e",
          padding: "20px",
          borderRadius: "10px",
          color: "#fff",
          width: "350px",
          boxShadow: "0 4px 8px rgba(255, 255, 255, 0.1)"
        }}>
          <img 
            src="/images/profile.jpg" 
            alt="User Profile" 
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <p>Bio: Web Developer and Tech Enthusiast</p>
          <h3>Posts</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>• First post!</li>
            <li>• Hello world!</li>
            <li>• React is awesome!</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  