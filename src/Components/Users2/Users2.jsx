import { useLoaderData } from "react-router-dom";

const Users2 = () => {
  const users2 = useLoaderData();

  return (
    <div>
      <h2>Users2: {users2.length}</h2>
    </div>
  );
};

export default Users2;
