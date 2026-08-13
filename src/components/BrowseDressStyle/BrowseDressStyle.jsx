import "./BrowseDressStyle.css";

const dressStyles = [
  {
    id: 1,
    name: "Casual",
    image: "/images/Frame 61.png",
  },
  {
    id: 2,
    name: "Formal",
    image: "/images/Frame 62.png",
  },
  {
    id: 3,
    name: "Party",
    image: "/images/Frame 64.png",
  },
  {
    id: 4,
    name: "Gym",
    image: "/images/Frame 63.png",
  },
];

function BrowseDressStyle() {
  return (
    <section className="browse-dress-style">
      <h2>BROWSE BY DRESS STYLE</h2>

      <div className="dress-style-grid">
        {dressStyles.map((style) => (
          <div className="dress-style-card" key={style.id}>
            <span>{style.name}</span>

            <img src={style.image} alt={`${style.name} dress style`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BrowseDressStyle;