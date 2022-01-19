import React, { useState } from "react";
// import "./App.css";
import Container from "./Components/Container/Container";

//Styles
import GlobalStyles from "./GlobalStyles";
//Data
import data from "./data.json";

//Creating a context
export const stateContext = React.createContext();

function App() {
  const [state, setState] = useState(data);

  const Upvote = (id, replyID) => {
    setState((prev) => {
      //change if second parameter is present
      if (replyID) {
        //Return comment with the provided ID
        let filteredComment = prev.comments.find(
          (comment) => comment.id === id
        );

        //Increment Reply score and return the array
        let updatedReplies = filteredComment.replies.map((reply) => {
          if (reply.id === replyID) {
            reply = { ...reply, score: reply.score + 1 };
          }
          return reply;
        });

        filteredComment = { ...filteredComment, replies: updatedReplies };

        const newComments = prev.comments.map((comment) => {
          if (comment.id === id) {
            comment = { ...filteredComment };
          }
          return comment;
        });

        return {
          ...prev,
          comments: newComments,
        };
      }

      let comments = prev.comments.map((comment) => {
        if (comment.id === id) {
          return { ...comment, score: comment.score + 1 };
        }
        return comment;
      });

      return { ...prev, comments };
    });
  };

  const Downvote = (id, replyID) => {
    setState((prev) => {
      //change if second parameter is present
      if (replyID) {
        //Return comment with the provided ID
        let filteredComment = prev.comments.find(
          (comment) => comment.id === id
        );

        //Increment Reply score and return the array
        let updatedReplies = filteredComment.replies.map((reply) => {
          if (reply.id === replyID) {
            reply = { ...reply, score: reply.score - 1 };
          }
          return reply;
        });

        filteredComment = { ...filteredComment, replies: updatedReplies };

        const newComments = prev.comments.map((comment) => {
          if (comment.id === id) {
            comment = { ...filteredComment };
          }
          return comment;
        });

        return {
          ...prev,
          comments: newComments,
        };
      }

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
      <stateContext.Provider value={{ Upvote, Downvote }}>
        <Container state={state} />
      </stateContext.Provider>

      <GlobalStyles />
    </div>
  );
}

export default App;
