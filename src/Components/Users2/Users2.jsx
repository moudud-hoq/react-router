import { useLoaderData } from "react-router-dom";
import User from "./../User/User";

const Users2 = () => {
  const users2 = useLoaderData();

  return (
    <div>
      <h2>Users2: {users2.length}</h2>
      <div>
        {users2.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users2;
