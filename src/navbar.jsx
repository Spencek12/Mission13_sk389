// import React from "react";
// import { BrowserRouter, Route, Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/movieList">Movie Collection</Link>
//         </li>
//         <li>
//           <Link to="/podcast">Podcast</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movieCollection">Movie Collection</Link>
        </li>
        <li>
          <Link to="/podcasts">My Podcasts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
