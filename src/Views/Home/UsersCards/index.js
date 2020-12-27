import { useSelector } from "react-redux";
import UserCard from "../../../Components/UserCard";

const UsersCards = () => {
  const { users } = useSelector((state) => state.app);

  return (
    <div className="card-list-root">
      {users.map((item) => (
        <UserCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default UsersCards;
