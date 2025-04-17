

const AddAUser = () => {

	
  return (
    <form>
      <label htmlFor="name">
        New User Name:
        <input id="name" name="name" type="text"></input>
      </label>
      <label htmlFor="color">
        New User's Favorite Color:
        <input id="color" name="color" type="color"></input>
      </label>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddAUser;
