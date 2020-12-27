import "./style.css";
import { useSelector } from "react-redux";

import SearchBar from "../../Views/Home/SearchBar";
import UsersCards from "../../Views/Home/UsersCards";
import ReposCards from "../../Views/Home/ReposCards";
import Loader from "../../Components/Loader";

function HomePage() {
  const {
    users,
    repositories,
    selectedEntity,
    errorMessage,
    loading,
    inputVal,
  } = useSelector((state) => state.app);
  const isContentAvailable = Boolean(users.length || repositories.length);

  return (
    <div
      className={`root${!isContentAvailable ? " root-without-content" : ""}`}
    >
      <div style={{ padding: "1.5%" }}>
        <div className="app-info">
          <div>
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="github-logo"
            />
          </div>
          <div>
            <h2>Github Searcher</h2>
            <p>Search users or repositories below</p>
          </div>
        </div>
        <SearchBar />
      </div>
      {loading ? (
        <Loader />
      ) : selectedEntity === "users" ? (
        <UsersCards />
      ) : (
        <ReposCards />
      )}
      {!loading && inputVal.length >= 3 && !isContentAvailable && errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;
