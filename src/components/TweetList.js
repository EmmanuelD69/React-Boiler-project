import React from "react";
import Tweet from "./Tweet"

const TweetList = ({auteur,message}) => {
    return(
        <div className="tweet">
            <Tweet auteur={auteur} message={message} />
            <Tweet auteur={auteur} message={message} />
            <Tweet auteur={auteur} message={message} />
        </div>
    );
};

export default TweetList;