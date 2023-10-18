import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {loadedUsers.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
