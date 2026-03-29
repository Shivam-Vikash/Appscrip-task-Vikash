"use client";

import { useEffect, useState } from "react";
import FilterSection from "@/components/Filter";
import Dropdown from "@/components/Dropdown";
import MobileNav from "@/components/MobileNav";


// import "../app/globals.css"

const options = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

export default function HomeClient({ products, categories }) {
  const [showFilter, setShowFilter] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);


  useEffect(() => {
    if (window.innerWidth <= 768) {
      setShowFilter(false);
    }
  }, []);

  return (
    <main>
      <div className="container">

        <div className="switch_tab_sm">
        <span
            className={`switch_tab_home ${showMobileNav ? "active" : ""}`}
            onClick={() => setShowMobileNav(true)}
        >
            HOME
        </span>

        <span className="switch_tab_divider">|</span>

        <span
            className={`switch_tab_shop ${!showMobileNav ? "active" : ""}`}
            onClick={() => setShowMobileNav(false)}
        >
            SHOP
        </span>
        </div>

        {/* MOBILE NAV */}
        {showMobileNav ? (
          <MobileNav onClose={() => setShowMobileNav(false)} />
        ) : (
          <>
            {/* title and descripton */}
            <section className="home_title_desc">
              <h1 className="home_title">DISCOVER OUR PRODUCTS</h1>
              <h2 className="home_description">
                {/* Explore high-quality products curated for modern lifestyles. */}
                Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
                scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
              </h2>
            </section>

            {/* toolbar - hide/show button and sort section */}
            <div className="toolbar">
              <div className="toolbar__left">
                <span>{products.length} ITEMS</span>

                <button onClick={() => setShowFilter(!showFilter)}>
                  {showFilter ? "< HIDE FILTER" : "> SHOW FILTER"}
                </button>
              </div>

              <div className="toolbar__right">
                <Dropdown options={options} />
              </div>
            </div>

            {/* mobiletoolbar - hide/show button and sort section */}

            <div className="mobile-toolbar">
                <div className="mobile-filter" onClick={() => setShowFilter(!showFilter)}>FILTER</div>
                <div style={{color:"gray",fontSize:20}}>|</div>
                <div className="mobile-sort">
                      <Dropdown options={options} />
                </div>
            </div>

            {/* products and filtter */}
            <div className="layout">

              {/* filter */}
              {showFilter && (
                <aside className="filter">
                    <FilterSection title="CATEGORIES" options={categories} />
                    <FilterSection title="IDEAL FOR" options={["Men", "Women", "Baby & Kids"]} />
                    <FilterSection title="OCCASION" options={["Ethnic", "Party", "Vacation"]} />
                    <FilterSection title="FABRIC" options={["Cotton", "Silk", "Polyester"]} />
                    <FilterSection title="SEGMENT" options={["Men", "Women", "Baby & Kids"]} />
                    <FilterSection title="SUITABLE FOR" options={["Summer", "Winter", "Rainy"]} />
                    <FilterSection title="RAW MATERIALS" options={["Cotton", "Silk", "Polyester"]} />
                    <FilterSection title="PATTERN" options={["Check", "Solid", "Print"]}/>
                </aside>
              )}

              {/* products view */}
              <section className={`products ${ showFilter ? "grid-3" : "grid-4"}`}>
                {products.map((item) => (
                  <div className="card" key={item.id}>
                    {/* <img src={item.image} alt={item.title} /> */} /* https://fakestoreapi.com/products */
                    <img src={item.thumbnail} alt={item.title} />   /* https://dummyjson.com/products */
                    <h4>
                      {item.title.length > 40
                        ? item.title.slice(0, 40) + "..."
                        : item.title}
                    </h4>
                    <p>₹ {item.price}</p>
                  </div>
                ))}
              </section>

            </div>
          </>
        )}

      </div>
    </main>
  );
}