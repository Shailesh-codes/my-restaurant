import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Bannner from "../images/banner.jpeg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Bannner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link>
            <button>ORDER NOW </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
