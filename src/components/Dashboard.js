import React from "react";

const Dashboard = () => {
  const dummyPosts = [
    { id: 1, title: "Post 1", content: "This is the first post" },
    { id: 2, title: "Post 2", content: "This is the second post" },
    { id: 3, title: "Post 3", content: "This is the third post" },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      {dummyPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
