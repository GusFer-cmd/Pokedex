import "./Search.css";

const Search = (props) => {
  return (
    <>
      <form className="form" onSubmit={props.onSubmit}>
        <input 
            type={props.type}
            className="input__search"
            placeholder={props.placeholder}
            required={props.required}
            value={props.value}
            onChange={props.onChange}
        />
      </form>
    </>
  );
};

export default Search;
