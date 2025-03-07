function Card({ id, countryName, countryImage, clickEvent }) {
  return (
    <div className="cardContainer" onClick={clickEvent}>
      <div className="cardImage">
        <img key={id} src={countryImage} alt="Country Flag" width="100" />
      </div>
      <span className="cardDescription">{countryName}</span>
    </div>
  );
}

export default Card;
