import { useState } from "react";
import PropTypes from "prop-types";

export function MovieCard({ movie }) {
    const [getterCard, setterCard] = useState(movie.duration);
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive((current) => !current);
    };
    return (
        <>
            <div
                className="movieCard"
                onClick={function () {
                    setterCard(getterCard + 1);
                }}
            >
                <img className="movieImg" src={movie.imgURL}></img>
                <div className="movieInfoDiv">
                    <h1 className="movieTitle">{movie.title}</h1>
                    <p className="movieDescription">{movie.desc}</p>
                    <p className="movieDuration">{getterCard} Mins</p>
                    <div className="movieFavoriteDiv">
                        <button
                            className="movieFavorite"
                            onClick={handleClick}
                        ></button>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .movieCard {
                        display: flex;
                        flex-direction: column;
                        width: 200px;
                        height: auto;
                        background-color: black;
                        border: 1px solid grey;
                        border-radius: 5px;
                        overflow: hidden;
                        padding: 1px;
                    }
                    .movieInfoDiv {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        gap: 10px;
                    }

                    .movieTitle {
                        background-color: green;
                        flex: 0 0 100%;
                        order: 0;
                    }

                    .movieImg {
                        width: 200px;
                        height: 200px;
                    }
                    p {
                        color: ${isActive ? "white" : "blue"};
                    }
                    .movieDescription {
                        color: white;
                        flex: 0 0 80%;
                        order: 0;
                    }

                    .movieDuration {
                        flex: 0 0 100%;
                        color: grey;
                        font-weight: 300;
                        order: 2;
                    }
                    .movieFavoriteDiv {
                        order: 1;
                        flex: 0 0 10%;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                    }
                    .movieFavorite {
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        align-self: center;
                    }
                    .favActive {
                        color: red;
                    }
                    .favInactive {
                        color: grey;
                    }
                `}
            </style>
        </>
    );
}

MovieCard.prototype = {
    movie: PropTypes.object.isRequired,
};
