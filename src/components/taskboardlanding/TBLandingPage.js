import { TBLandingList } from "./TBLandingList"

export const TaskBoardLandingPage = () => {

    return (
        <div className="taskBoardPageContainer">
            <div className="taskBoardBtnHeader">
                <button className="NewBoardBtn">Create New Board</button>
            </div>
            <div className="TaskBoardsList">
                <h1>Board List</h1>
                <TBLandingList />
            </div>
        </div>
    )
}