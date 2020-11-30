import React from "react";
//Import components
import TweetList from "./components/TweetList" 
import CreateTweet from "./components/CreateTweet"

function App() {
  /* En dehors des () du return on code en Javascript normal */
  const auteur = "EmmanuelDev";
  const message = "Coucou, React c'est super cool!";
  const sayHello = (username) => {
            console.log(`coucou ${username}`);
        }

  return (
    /* Entre les () du return on code en JSX */
    <div>
      <h1>Hello React test</h1>
      <CreateTweet />
      <TweetList auteur={auteur} message={message} />
      <button onClick={() => sayHello("EmmanuelDev")}>Click</button>
    </div>
  );
};

export default App;
