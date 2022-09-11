export const TaskBoardLandingPage = () => {
    const [taskBoardCards, setTaskBoardCards] = ([])

    return (
        <div className="taskBoardPageContainer">
            <div className="taskBoardBtnHeader">
                <button className="NewBoardBtn">Create New Board</button>
            </div>
            <div className="TaskBoardsList">
                <h1>Task Board List Goes here</h1>
            </div>
        </div>
    )
}