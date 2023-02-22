import { useDispatch } from "react-redux";
import { filtreTache, suppTach } from "./Redux";

const TaskItem = (props) => {
  const { tache } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={tache.faire}
          onChange={() => dispatch(filtreTache(tache.id))}
        />
        {tache.text}
      </label>
      <div>
        <label>
          <p>
            <span
              onClick={() => dispatch(suppTach(tache.id))}
              role="button"
              style={{ padding: "5px", marginLeft: "20px", color: "red" }}
            >
              X
            </span>
          </p>
        </label>
      </div>
    </div>
  );
};
export default TaskItem;