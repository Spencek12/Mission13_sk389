//import { useState } from "react";
// import data from "./MovieData.json";
import test from "./MovieData.json";

const MDS = test.MovieData;

function MovieList() {
  //const [listOmovies, setListOMovies] = useState(MDS);

  //   const addMovie = () => {
  //     setListOMovies([
  //       ...MDS,
  //       {
  //         Category: "Action/Adventure",
  //         Title: "Test",
  //         Year: 1989,
  //         Director: "Tim Burton",
  //         Rating: "PG-13",
  //         Edited: "No",
  //       },
  //     ]);
  //   };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
              <th>Edited</th>
            </tr>
          </thead>
          <tbody>
            {MDS.map((m) => (
              <tr key={m.Title}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <button
        className="btn btn-primary"
        onClick={addMovie}
      >
        Add Movie
      </button> */}
    </>
  );
}

export default MovieList;
