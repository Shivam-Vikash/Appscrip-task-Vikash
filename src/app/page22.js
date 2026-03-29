
// "use client";

// import Header from "@/components/Header";
// import { useEffect, useState } from "react";
// import FilterSection from "@/components/Filter"
// import Dropdown from "@/components/Dropdown";

// import MobileNav from "@/components/MobileNav";
// import Footer from "@/components/Footer";

// const options = [
//   "RECOMMENDED",
//   "NEWEST FIRST",
//   "POPULAR",
//   "PRICE : HIGH TO LOW",
//   "PRICE : LOW TO HIGH"
// ];

// // export default async function Home() {
// //   const res = await fetch("https://fakestoreapi.com/products");
// //   const products = await res.json();


// async function getProducts() {
//   const res = await fetch("https://fakestoreapi.com/products", {
//     cache: "no-store", // or "force-cache" if static
//   });

//   return res.json();
// }


// export default function Home() {
//   const [showFilter, setShowFilter] = useState(true);
//   const [mounted, setMounted] = useState(false);

//   const [categories, setCategories] = useState([]);

//   const [showMobileNav, setShowMobileNav] = useState(false);

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//   setMounted(true);

//   if (window.innerWidth <= 768) {
//     setShowFilter(false);
//   }
// }, []);




// useEffect(() => {
//   const fetchProducts = async () => {
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");
//       const data = await res.json();
//       setProducts(data);

//        const uniqueCategories = [
//         ...new Set(data.map((item) => item.category)),
//       ];

//       setCategories(uniqueCategories);

//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchProducts();
// }, []);

// if (!mounted) return null;

//   return (
//     <main>

//       {/* <Header /> */}

//       <div className="container">
            
        
//         <div className="breadcrumb">
//           <span
//             className={`breadcrumb__home ${
//               showMobileNav ? "active" : ""
//             }`}
//             onClick={() => setShowMobileNav(true)}
//           >
//             HOME
//           </span>

//           <span className="breadcrumb__divider">|</span>

//           <span
//             className={`breadcrumb__shop ${
//               !showMobileNav ? "active" : ""
//             }`}
//             onClick={() => setShowMobileNav(false)}
//           >
//             SHOP
//           </span>
//         </div>

//         {/* condition render her if mobile */}
//   {showMobileNav ? (
//     <MobileNav onClose={() => setShowMobileNav(false)} />
//   ) : (
//     <>
      
//        {/* ===== PAGE TITLE ===== */}
//        <section className="hero">
//          <h1 className="hero__title">DISCOVER OUR PRODUCTS</h1>

//          {/* ===== PAGE DESCRIPTION ===== */}
//          <h2 className="hero__description">
//            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
//            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
//          </h2>
//        </section>


//       {/* Toggle Row */}
//       <div>

//       <div className="toolbar">
    
//         {/* LEFT */}
//         <div className="toolbar__left">
//           <span>3425 ITEMS</span>

//           <button onClick={() => setShowFilter(!showFilter)}>
//             {showFilter ? "< HIDE FILTER" : "> SHOW FILTER"}
//           </button>
//         </div>

//         {/* RIGHT */}
//         <div className="toolbar__right">
//           <Dropdown label="Sort" options={options} />
//         </div>

//       </div>

//       {/* MOBILE TOOLBAR */}
//       <div className="mobile-toolbar">

//         <div
//           className="mobile-filter"
//           onClick={() => setShowFilter(!showFilter)}
//         >
//           FILTER
//         </div>

//         <div className="divider" />

//         <div className="mobile-sort">
//           <Dropdown options={options} />
//         </div>

//       </div>

//       </div>

//       {/* Layout */}
//       <div className="layout">
//         {/* FILTER SIDEBAR */}
//         {showFilter && (
//           <aside className="filter">
//           <div style={{ borderBottom:'1px solid #eee', padding: '15px 0', fontSize:'13px', fontWeight:600, letterSpacing:'0.5px'}}>
//             <label>
//               <input type="checkbox"/> CUSTOMIZABLE
//             </label>
//           </div>

//           {/* <FilterSection title="IDEAL FOR">
//             <label><input type="checkbox" /> Men</label>
//             <label><input type="checkbox" /> Women</label>
//             <label><input type="checkbox" /> Baby & Kids</label>
//           </FilterSection>

//           <FilterSection title="OCCASION">
//             <label><input type="checkbox" /> Ethnic</label>
//             <label><input type="checkbox" /> Party</label>
//             <label><input type="checkbox" /> Vaccation</label>
//           </FilterSection>

//           <FilterSection title="FABRIC">
//             <label><input type="checkbox" /> Cotton</label>
//             <label><input type="checkbox" /> Silk</label>
//             <label><input type="checkbox" /> Polyester</label>
//           </FilterSection>

//           <FilterSection title="SEGMENT">
//             <label><input type="checkbox" /> Men</label>
//             <label><input type="checkbox" /> Women</label>
//             <label><input type="checkbox" /> Baby & Kids</label>
//           </FilterSection>

//           <FilterSection title="SUITABLE FOR">
//             <label><input type="checkbox" /> Summer</label>
//             <label><input type="checkbox" /> Winter</label>
//             <label><input type="checkbox" /> Rainy</label>
//           </FilterSection>

//           <FilterSection title="RAW MATERIALS">
//             <label><input type="checkbox" /> Cotton</label>
//             <label><input type="checkbox" /> Silk</label>
//             <label><input type="checkbox" /> Polyester</label>
//           </FilterSection>

//           <FilterSection title="PATTERN">
//             <label><input type="checkbox" /> Check</label>
//             <label><input type="checkbox" /> Solid</label>
//             <label><input type="checkbox" /> Print</label>
//           </FilterSection> */}

//           <FilterSection
//             title="CATEGORIES"
//             options={categories}
//           />

//           <FilterSection
//             title="IDEAL FOR"
//             options={["Men", "Women", "Baby & Kids"]}
//           />

//           <FilterSection
//             title="OCCASION"
//             options={["Ethnic", "Party", "Vacation"]}
//           />

//           <FilterSection
//             title="FABRIC"
//             options={["Cotton", "Silk", "Polyester"]}
//           />

//           <FilterSection
//             title="SEGMENT"
//             options={["Men", "Women", "Baby & Kids"]}
//           />

//           <FilterSection
//             title="SUITABLE FOR"
//             options={["Summer", "Winter", "Rainy"]}
//           />

//           <FilterSection
//             title="RAW MATERIALS"
//             options={["Cotton", "Silk", "Polyester"]}
//           />

//           <FilterSection
//             title="PATTERN"
//             options={["Check", "Solid", "Print"]}
//           />

//         </aside>
//         )}

//         {/* PRODUCT GRID */}
//         {/* <section
//           className={`products ${
//             showFilter ? "grid-3" : "grid-4"
//           }`}
//         >
//           {Array.from({ length: 8 }).map((_, i) => (
//             <div className="card" key={i}>
//               <img src="/aaa.jpeg" alt="product image" />
//               <h4>Product Name</h4>
//               <p>Sign in to see pricing</p>
//             </div>
//           ))}
//         </section> */}

//         <section
//           className={`products ${
//             showFilter ? "grid-3" : "grid-4"
//           }`}
//         >
//           {(loading ? Array.from({ length: 8 }) : products).map((item, i) => (
//             <div className="card" key={loading ? i : item.id}>
              
//               {loading ? (
//                 <>
//                   <div className="card__loading">loading...</div>
//                 </>
//               ) : (
//                 <>
//                   <img src={item.image} alt={item.title} />
//                   <h4>
//                     {item.title.length > 40
//                       ? item.title.slice(0, 40) + "..."
//                       : item.title}
//                   </h4>
//                   <p>₹$ {item.price}</p>
//                 </>
//               )}

//             </div>
//           ))}
//         </section>

//       </div>

//       </>
//       )}

//       </div>


//       {/* <Footer /> */}
//     </main>
//   );
// }
















// // export default function Home() {
// //   return (
// //     <div className={styles.page}>
// //       <main className={styles.main}>
// //         <Image
// //           className={styles.logo}
// //           src="/next.svg"
// //           alt="Next.js logo"
// //           width={100}
// //           height={20}
// //           priority
// //         />
// //         <div className={styles.intro}>
// //           <h1>To get started, edit the page.js file.</h1>
// //           <p>
// //             Looking for a starting point or more instructions? Head over to{" "}
// //             <a
// //               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               Templates
// //             </a>{" "}
// //             or the{" "}
// //             <a
// //               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //             >
// //               Learning
// //             </a>{" "}
// //             center.
// //           </p>
// //         </div>
// //         <div className={styles.ctas}>
// //           <a
// //             className={styles.primary}
// //             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             <Image
// //               className={styles.logo}
// //               src="/vercel.svg"
// //               alt="Vercel logomark"
// //               width={16}
// //               height={16}
// //             />
// //             Deploy Now
// //           </a>
// //           <a
// //             className={styles.secondary}
// //             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             Documentation
// //           </a>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }
