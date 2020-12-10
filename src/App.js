import React from "react";
//Import components
import TweetList from "./components/TweetList" 
import CreateTweet from "./components/CreateTweet"

function App() {
  /* En dehors des () du return on code en Javascript normal */
  let name = "React"
  const auteur = "EmmanuelDev";
  const message = "Coucou, React c'est super cool!";
  const sayHello = (e) => {
            name = "World";
            console.log(name);
        }

  return (
    /* Entre les () du return on code en JSX */
    <div>
      <h1>Hello {name}</h1>
      <CreateTweet />
      <TweetList auteur={auteur} message={message} />
      <button onClick={sayHello}>Click</button>
    </div>
  );
};

export default App;
