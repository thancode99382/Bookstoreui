import User from "../Form/User";

export default function Navbar() {
  const userName = localStorage.getItem("username");

  return (


    <nav>
    <div className="logo">BOOKSTORE</div>
    <ul className="list">
      <li className="item-list active">
        <a href="#">HOME</a>
      </li>
      <li className="item-list">
        <a href="#">ABOUT</a>
      </li>
      <li className="item-list">
        <a href="#">OFFERS</a>
      </li>
      <li className="item-list">
        <a href="#">NEWS</a>
      </li>
      <li className="item-list">
        <a href="#">CONTACT</a>
      </li>
    </ul>
    <div>
    {userName && <User />}
    </div>
  </nav>
  
    // <div className="row g-0 ">
    //   <div className="col">
    //     <nav
    //       className="navbar navbar-expand-md"
    //       style={{ height: "58px", background: "#090979" }}
    //     >
    //       <div className="container-fluid">
    //         <button
    //           className="navbar-toggler"
    //           data-bs-toggle="collapse"
    //           data-bs-target="#navcol-1"
    //         >
    //           <span className="visually-hidden">Toggle navigation</span>
    //           <span className="navbar-toggler-icon"></span>
    //         </button>
    //         <div
    //           id="navcol-1"
    //           className="collapse navbar-collapse text-uppercase text-light d-lg-flex justify-content-around"
    //           style={{ color: "var(--bs-navbar-active-color)" }}
    //         >
    //           <ul className="navbar-nav">
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link active link-light"
    //                 href="#"
    //                 style={{ fontWeight: "bold", marginRight: "10px", color:'#fff' }}
    //               >
    //                 Home
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link link-light"
    //                 href="#"
    //                 style={{ fontWeight: "bold" }}
    //               >
    //                 Text Book
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link link-light"
    //                 href="#"
    //                 style={{ fontWeight: "bold", marginRight: "10px" }}
    //               >
    //                 Ebook
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link link-light"
    //                 href="#"
    //                 style={{ fontWeight: "bold", marginRight: "10px" }}
    //               >
    //                 subcirption
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link link-light"
    //                 href="#"
    //                 style={{ fontWeight: "bold", marginRight: "10px" }}
    //               >
    //                 features
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link link-light"
    //                 href="#"
    //                 style={{ fontWeight: "bold", marginRight: "10px" }}
    //               >
    //                 pages
    //               </a>
    //             </li>
    //             <li className="nav-item">
    //               <a
    //                 className="nav-link link-light"
    //                 href="#"
    //                 style={{ fontWeight: "bold", marginRight: "10px" }}
    //               >
    //                 K2 Blog
    //               </a>
    //             </li>
    //           </ul>
    //           <i className="fa fa-search" style={{ fontSize: "28px" }}></i>
    //         </div>
    //         {userName && <User />}
    //       </div>
    //     </nav>
    //   </div>
    // </div>
  );
}
