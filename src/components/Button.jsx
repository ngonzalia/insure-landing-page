const Button = (props) => {
  return (
    <button
      type='button'
      className={`btn btn--${props.theme} btn--${props.type} w700`} >
      {props.text}
    </button>
  );
};

export default Button;