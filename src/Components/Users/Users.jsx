import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>Here is users formula</h1>
      <h1>Our Users: {users.length}</h1>
    </div>
  );
};

export default Users;
