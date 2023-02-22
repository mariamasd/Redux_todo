import { useState } from "react";
import { useDispatch } from "react-redux";
import { AjoutTach } from "./Redux";

const TacheForm = () => {
  const [text, setText] = useState("");
const Dispatch= useDispatch()
  const handleSubmit = (event) => {
    event.preventDefault();

   Dispatch(AjoutTach(text))

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ajouter une tâche"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default TacheForm;