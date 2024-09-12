const CardListItem = ({ isLineThrough, text }) => {
  return (
    <>
      <li style={{ textDecoration: isLineThrough ? "line-through" : "none" }}>
        <p>{text}</p>
      </li>
    </>
  );
};

export default CardListItem;
