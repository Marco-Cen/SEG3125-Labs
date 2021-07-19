const ExhibitionTileCard = ({ fossils, title }) => {
    return (
      <div className="fossilTileCardLayout">
        <h2>{ title }</h2>

        {fossils.map(fossil => (
          <div className="fossilTileCardPreview" key={fossil.id} >
            <h2>{ fossil.title }</h2>
            <p> For More Information: { fossil.resources }</p>
          </div>
        ))}
      </div>
    );
  }
   
  export default ExhibitionTileCard;