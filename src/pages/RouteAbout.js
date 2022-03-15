
import { Link } from "react-router-dom";
import About from "./About/About";

function RouteAbout() {
  return (
    <Link to='/' component={<About />}></Link>
    );
}

export default RouteAbout;
