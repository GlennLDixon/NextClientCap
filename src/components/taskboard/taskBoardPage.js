export const TaskBoardPage = () => {
    const [taskBoards, setTaskBoard] = ([])

    return (
        <div className="taskBoardPageContainer">
            <div className="taskBoardBtnHeader">
                <button className="NewBoardBtn">Create New Task Board</button>
            </div>
            <div className="TaskBoardsList">
                <h1>Task Board List Goes here</h1>
            </div>
        </div>
    )
}