import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      react-home页面
      <Link to="/about">toabout</Link>
    </div>
  );
};
export default Home;
