import { useSelector } from "react-redux";

const Tache = () => {
  const taches = useSelector((state) => state.todo);
  const pasFaire = taches.filter((t) => t.faire === false);
  return (
    <>
      <header>
        <h1> Application TODO</h1>
        <p>
         <h2>Les taches a faire: <strong> {pasFaire.length}</strong></h2>
        </p>
      </header>
    </>
  );
};

export default Tache;
