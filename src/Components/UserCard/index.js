import "./style.css";

const UserCard = ({ data: { login, avatar_url } }) => {
  return (
    <div className="root-card">
      <div className="card-wrapper">
        <div className="card-front">
          <div className="card-links"></div>
          <div className="card-user">
            <img src={avatar_url} alt={login} />
            <span>
              {login} <i>@{login}</i>
            </span>
            <div className="user-info">
              <span>
                <a
                  href={`https://github.com/${login}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Goto<b>Repositories</b>
                </a>
              </span>
              <span>
                <a
                  href={`https://github.com/${login}?tab=followers`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Goto<b>Followers</b>
                </a>
              </span>
              <span>
                <a
                  href={`https://github.com/${login}?tab=following`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Goto<b>Following</b>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
