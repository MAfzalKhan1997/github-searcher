import { useSelector } from "react-redux";
import RepoCard from "../../../Components/RepoCard";

const ReposCards = () => {
  const { repositories } = useSelector((state) => state.app);

  return (
    <div className="card-list-root">
      {repositories.map((item) => (
        <RepoCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ReposCards;
