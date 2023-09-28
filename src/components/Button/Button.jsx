import "./Button.css";

const Button = (props) => {
  return (
    <div className="buttons">
      <button onClick={props.onPrev} className="button btn-prev">
        Prev &lt;
      </button>
      <button onClick={props.onNext} className="button btn-next">
        Next &gt;
      </button>
    </div>
  );
};

export default Button;
