import Avatar from "../../components/Avatar";
import { useFirestore } from "../../hooks/useFirestore";
import { useNavigate, useParams } from "react-router-dom";
import "./Project.css";

export default function ProjectSummary({ project }) {

  const {deleteDocument} = useFirestore("projects");
  const navigate = useNavigate()
  const { id } = useParams();

  const clickHandler = (e) => {
    e.preventDefault();
    deleteDocument(id);
    navigate("/");
  }

  return (
    <div>
      <div className="project-summary">
        <h2 className="page-title">{project.name}</h2>
        <p className="due-date">
          Project Due By: {project.dueDate.toDate().toDateString()}
        </p>
        <p className="details">{project.details}</p>
        <h4>Project is assigned to:</h4>
        <div className="assigned-users">
          {project.assignedUsersList.map((user) => (
            <div key={user.id}>
              <Avatar src={user.photoURL} />
            </div>
          ))}
        </div>
      </div>
        <button className="btn" onClick={clickHandler}>Task Done</button>
    </div>
  );
}
