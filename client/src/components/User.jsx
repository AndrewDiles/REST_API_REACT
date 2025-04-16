const userStyles = {
  display: "inline-block",
  minHeight: "300px",
  minWidth: "300px",
  border: "10px solid grey",
  backgroundColor: "rgba(0,0,0,0.2)",
  fontSize: "2em",
  margin: "10px",
  textAlign: "center",
  lineHeight: "300px",
};

const User = ({ user }) => {
  if (!user || typeof user !== "object") {
    return (
      <p>
        Please provide the User component a user object in the prop of "user"
      </p>
    );
  }
  const { name } = user;
  const favColor = user["favorite-color"];
  return <p style={{ ...userStyles, borderColor: favColor }}>{name}</p>;
};

export default User;
