function Card({ id, countryName, countryImage, clickEvent }) {
  const handleClickEvent = () => {
    clickEvent(id);
  };

  return (
    <div className="cardContainer" onClick={handleClickEvent}>
      <div className="cardImage">
        <img key={id} src={countryImage} alt="Country Flag" height="100" />
      </div>
      <span className="cardDescription">{countryName}</span>
    </div>
  );
}

export default Card;
