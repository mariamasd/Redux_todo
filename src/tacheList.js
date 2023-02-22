import { useSelector } from "react-redux";
import TaskItem from "./tachesItem";

const TacheList = () => {
  const taches = useSelector((state) => state.todo);
  return (
    <>
      {taches.map((t) => (
        <TaskItem tache={t} key={t.id} />
      ))}
    </>
  );
};

export default TacheList;
