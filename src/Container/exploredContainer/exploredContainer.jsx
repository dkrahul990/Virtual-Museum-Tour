import "./exploredContainer.css";

const ExploredContainer = ({ images1 }) => {
  return (
    <div>
      <div className="items"></div>
      <div className="mu-01">
        <ul>
          {images1.map((image, index) => (
            <li key={index}>
              <img src={image} alt={`pic-${index}`} />
            </li>
          ))}
        </ul>
        <p style={{ color: "red" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          eveniet iste rem dolorum ipsa quod numquam maxime unde non laborum ad
          consectetur fuga. Voluptatibus corporis suscipit similique vel
          delectus rem!
        </p>
      </div>
    </div>
  );
};

export default ExploredContainer;