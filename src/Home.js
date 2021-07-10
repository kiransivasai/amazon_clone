import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/MonsterSeries/V203057508_SamsungM_M21_M31_GW_tall_hero_1500x600._CB410822764_.jpg"
          alt="Banner"
        />
        <div className="home__row">
          <Product
            id={1}
            title="Learn code with this amazing mouse and make fun"
            image="https://images-eu.ssl-images-amazon.com/images/I/51jQkq7fcJL._AC_UL220_SR180,220_.jpg"
            rating={5}
            price={1500}
          />
          <Product
            id={2}
            title="Acer Predator helios 300 16gb ram 512 gb ssd and many more features"
            image="https://images-eu.ssl-images-amazon.com/images/I/41D5tZyrpGL._AC_SY200_.jpg"
            rating={4}
            price={121000}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Tecno Spark 6 Air | 6000 Mah battery | 7' display"
            image="https://m.media-amazon.com/images/I/41XaHsa5uML.__AC_SY200_.jpg"
            rating={5}
            price={500}
          />
          <Product
            id={4}
            title="Amazing headset and cannon Camera"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Gateway_Unboxed_1209837_379x304._SY304_CB424157491_.jpg"
            rating={3}
            price={700}
          />
          <Product
            id={5}
            title="Keyboard with RGB colors and heavy durability keyboard"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/Covid19/Dashboard/V201712426_IN_CEPC_GW_essentials_May20_rush_dbqc_1x_7._SY116_CB431287690_.jpg"
            rating={4}
            price={450}
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="TCL 138.7 cm (55 inches)  AI 4K Ultra HD Smart Certified Android LED TV 55P8S | Supreme with Farfield Voice Search (Black) (2019 Model)"
            image="https://m.media-amazon.com/images/I/71nxdM4AwpL._AC_UY218_.jpg"
            rating={5}
            price={6000}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
