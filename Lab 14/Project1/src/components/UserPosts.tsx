const UserPosts = () => {
  const posts = ["First post!", "Hello world!", "React is awesome!"];

  return (
    <div>
      <h3>Posts</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPosts;
