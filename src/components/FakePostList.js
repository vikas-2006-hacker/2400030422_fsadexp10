import React, { useEffect, useState } from "react";
import axios from "axios";

function FakePostList() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => setPosts(res.data.posts));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Fake API Posts</h2>

      <button onClick={fetchPosts}>Refresh</button>

      {posts.map((p) => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FakePostList;