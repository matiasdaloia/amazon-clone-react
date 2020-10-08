import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12345"
            title="Hello world"
            price={19.99}
            img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={5}
          />
          <Product
            id="123456"
            title="Hello world"
            price={19.99}
            img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={3}
          />
          <Product
            id="12341235"
            title="Hello world"
            price={19.99}
            img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1231231545"
            title="Hello world"
            price={19.99}
            img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={5}
          />
          <Product
            id="12343335"
            title="Hello world"
            price={19.99}
            img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12567345"
            title="Hello world"
            price={19.99}
            img="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_ML2_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
