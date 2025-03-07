function Card({ id, countryName, countryImage }) {
  return (
    <div className="cardContainer">
      <div className="cardImage">
        <img key={id} src={countryImage} alt="Country Flag" width="100" />
      </div>
      <span className="cardDescription">{countryName}</span>
    </div>
  );
}

export default Card;
