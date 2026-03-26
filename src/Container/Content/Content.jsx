import "./Content.css";
import coverImage2 from "../assets/homeContent.webp";
import explorebutton from "../assets/explore.webp";
import item1 from "../assets/m-01.jpg";
import item2 from "../assets/m-02.jpg";
import item3 from "../assets/m-03.webp";
import { Link } from "react-router-dom";
const Content = () => {
    const styling = { letterSpacing:"2px",fontWeight:"bold",fontSize:"large",fontStyle:"oblique",width:"300PX",textAlign:"center"};
  return (
    <div>
      <div className="content-div">
        <Link to ="">
        <img
          src={coverImage2}
          
          style={{ width: "100%", marginTop: "-4rem" }}
        /></Link>
        <div className="container">
          <div className="item1">
            <div className="box">
              <img src={item1} alt="" />
            </div>
            <div className="explore">
              <Link to="./item1">
              <img src={explorebutton} alt="" /></Link>
            </div>
            <div>
              <p style={styling}>
                Vatican Museums, vatican City
              </p>
            </div>
          </div>

          <div className="item2">
            <div className=" box">
              <img src={item2} alt="" />
            </div>
            <div className="explore">
              <Link to="./item2">
              <img src={explorebutton} alt="" />
              </Link>
            </div>
            <div>
              <p style={styling}>
                LE Louvre Museums, Paris, France
              </p>
            </div>
          </div>

          <div className="item3">
            <div className="box">
              <img src={item3} alt="" />
            </div>
            <div className="explore">
              <Link to="./item3">
              <img src={explorebutton} alt="" />
              </Link>
            </div>
            <div>
              <p style={styling}>
                THE Metropolitan Museum of Art, New York, USA
              </p>
            </div>
          </div>
        </div>
        <button><Link to="/explore" style={{color:"red"}}>View All</Link></button>
      </div>
    </div>
  );
};

export default Content;
