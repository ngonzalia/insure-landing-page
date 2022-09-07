const Card = (props) => {
  return (
    <div className='card'>
      <img
        src={require(`../images/icon-${props.img}.svg`)}
        alt={`${props.title} icon`}
        className='card-img' />

      <h3 className='card-title dm-serif-display w400 dark-blue'>
        {props.title}
      </h3>

      <p className='card-text karla w400 gray'>
        {props.text}
      </p>
    </div>
  )
};

export default Card;