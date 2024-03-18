import React, { useEffect, useState } from "react";
import Update from "./Update";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/questions");
        const data = await res.json();
        setQuestions(data);
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (idToDelete) => {
    try {
      const res = await fetch(`http://localhost:4000/questions/${idToDelete}`, {
        method: "DELETE",
      });
      if (res.ok) {
        // If deletion is successful, update the questions state to remove the deleted question
        setQuestions(questions.filter((question) => question.id !== idToDelete));
      } else {
        console.error("Failed to delete question");
      }
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };


handleUpdate
  return (
    <section>
      <h1>Quiz Questions</h1>
      {questions.map((question) => {
        return (
          <div key={question.id}>
            <h3>{question.prompt}</h3>
            <li>{question.correctIndex}</li>
            <button onClick={() => handleDelete(question.id)}>Delete</button>
          </div>
        );
      })}
      <button onClick={handleUpdate}></button>
    </section>
  );
}

export default QuestionList;
