import "./style.css";

const RepoCard = ({
  data: {
    name,
    description,
    created_at,
    owner,
    forks_count,
    watchers_count,
    open_issues_count,
    stargazers_count,
    size,
    license,
    html_url,
  },
}) => {
  return (
    <div className="repo-wrapper">
      <div className="repo-front">
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <hr />
        <div className="details-row">
          <div>
            <p>
              Author:{" "}
              <a href={owner?.html_url} target="_blank" rel="noreferrer">
                <b>{owner?.login}</b>
              </a>
            </p>
            <p>
              Forks: <b>{forks_count}</b>
            </p>
            <p>
              Stars: <b>{stargazers_count}</b>
            </p>
            <p>
              Watchers: <b>{watchers_count}</b>
            </p>
            <p>
              Opened Issues: <b>{open_issues_count}</b>
            </p>
          </div>
          <div>
            <p>
              Date Created: <b>{new Date(created_at).toLocaleDateString()}</b>
            </p>
            <p>
              Size <b>{size} Bytes</b>
            </p>
            {license?.name && (
              <p>
                License <b>{license.name}</b>
              </p>
            )}
          </div>
        </div>
        <div className="repo-button-wrapper">
          <a href={html_url} target="_blank" rel="noreferrer">
            <button className="repo-button">Open Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
