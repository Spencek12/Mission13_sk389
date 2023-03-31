// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// // import App from "./App";
// // import reportWebVitals from "./reportWebVitals";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// // import MovieCollection from "./pages/MovieCollection";
// import Podcast from "./pages/Podcasts";
// import MovieList from "./Movies";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={<Layout />}
//         />
//         <Route
//           index
//           element={<Home />}
//         />
//         <Route
//           path="movieList"
//           element={<MovieList />}
//         />
//         <Route
//           path="podcast"
//           element={<Podcast />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// /* // const root = ReactDOM.createRoot(
// //   document.getElementById("root") as HTMLElement,
// // );
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals(); */

import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import MovieCollection from "./pages/MovieCollection";
import Podcasts from "./pages/Podcasts";

export default function App() {
  return (
    <BrowserRouter>
            
      <Routes>
                
        <Route
          path="/"
          element={<Layout />}
        >
                    
          <Route
            index
            element={<Home />}
          />
                    
          <Route
            path="movieCollection"
            element={<MovieCollection />}
          />
                    
          <Route
            path="podcasts"
            element={<Podcasts />}
          />
                             
        </Route>
              
      </Routes>
          
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
