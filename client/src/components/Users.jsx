import User from "./User";

const userStyles = {
	display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
}

const Users = ({ users }) => {
  if (!users || !Array.isArray(users)) {
    return (
      <p>
        Please provide the Users component an array of users in the prop of
        "users"
      </p>
    );
  }

  return (
    <section style={userStyles}>
      {users.map((user) => (
        <User key={user._id} user={user} />
      ))}
    </section>
  );
};

export default Users;
