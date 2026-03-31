import React, { useEffect, useState } from "react";

function LocalUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Local Users</h2>
      {users.map((u) => (
        <p key={u.id}>
          {u.name} - {u.email} - {u.phone}
        </p>
      ))}
    </div>
  );
}

export default LocalUserList;