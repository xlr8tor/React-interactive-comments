import { useState } from "react";
// import "./App.css";
import Container from "./Components/Container/Container";

//Styles
import GlobalStyles from "./GlobalStyles";
//Data
import data from "./data.json";

function App() {
  const [state, setState] = useState(data);
  console.log(state);
  const Upvote = (id) => {
    setState((prev) => {
      let comments = prev.comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, score: comment.score + 1 };
        }
        return comment;
      });

      return { ...prev, comments };
    });
  };

  const Downvote = (id) => {
    setState((prev) => {
      let comments = prev.comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, score: comment.score - 1 };
        }
        return comment;
      });

      return { ...prev, comments };
    });
  };

  return (
    <div className="App">
      <Container state={state} onUpvote={Upvote} onDownvote={Downvote} />
      <GlobalStyles />
    </div>
  );
}

export default App;
