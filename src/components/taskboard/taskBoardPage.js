import CurrentTaskCard from "./CurrentTaskCard";
import TaskList from "./TaskList";
import "./TaskBoardPage.css";

export const TaskBoardPage = () => {
  const [taskBoards, setTaskBoard] = [];

  return (
    <div className="taskBoardPageContainer">
      <div className="currentTaskBoardContainer">
        <CurrentTaskCard />
      </div>
      <hr id="line-break" />
      <div id="bottom-half-container">
        <div id="input-and-button-column">
          <div id="input-and-button-wrapper">
            <input type="text" id="new-task-input" />
            <div id="button-container">
              <button id="add-new-task-button">Add New Task</button>
            </div>
          </div>
        </div>
        <TaskList />
      </div>
    </div>
  );
};
