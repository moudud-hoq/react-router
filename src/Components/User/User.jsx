const User = ({ user }) => {
  const { id, name, email, phone } = user;
  const userStyle = {
    border: "2px solid red",
    padding: "12px ",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h2>{phone}</h2>
    </div>
  );
};

export default User;
