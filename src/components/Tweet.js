import React from "react";

const Tweet = ({auteur,message}) => {
    return(
        <div className="tweet">
            <h2>{auteur}</h2>
            <h3>{message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;