import "./style.css";

function GitInput({ value, onChange, ...props }) {
  return (
    <div className="input-root">
      <input
        className="git-input"
        type="text"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default GitInput;
