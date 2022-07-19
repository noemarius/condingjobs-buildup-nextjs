import { Clock } from "./Clock";
import { MovieCard } from "./MovieCard";

let movieOne = {
    title: "",
    genre: "",
    duration: "",
    description: "",
    imgURL: "",
};
let movieTwo = {
    title: "",
    genre: "",
    duration: "",
    description: "",
    imgURL: "",
};
let movieThree = {
    title: "",
    genre: "",
    duration: "",
    description: "",
    imgURL: "",
};
let movieFour = {
    title: "",
    genre: "",
    duration: "",
    description: "",
    imgURL: "",
};

let lastestMoviesDB = [movieOne, movieTwo, movieThree, movieFour];
let currentMoviesDB = [movieOne, movieTwo, movieThree, movieFour];

export function MainContainer() {
    return (
        <>
            <div className="mainContainer">
                <br />
                <div className="newMoviesContainer">
                    {lastestMoviesDB.map((e) => (
                        <MovieCard movie={e} />
                    ))}
                </div>
                <br />
                <div className="currentMoviesContainer">
                    {currentMoviesDB.map((e) => (
                        <MovieCard movie={e} />
                    ))}
                </div>
                <br />
                <div className="clockContainer">
                    <Clock />
                </div>
            </div>

            <style jsx>{`
                .mainContainer {
                    width: 80%;
                    margin: auto;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                }
                .newMoviesContainer,
                .currentMoviesContainer,
                .clockContainer {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    gap: 10px;
                    flex-wrap: wrap;
                }
            `}</style>
        </>
    );
}
