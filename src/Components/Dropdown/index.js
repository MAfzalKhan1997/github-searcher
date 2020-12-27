import "./style.css";

function GitDropdown({ value, onChange, ...props }) {
  return (
    <div>
      <select className="classic" value={value} onChange={onChange} {...props}>
        <option value="users">Users</option>
        <option value="repositories">Repositories</option>
      </select>
    </div>
  );
}

export default GitDropdown;
