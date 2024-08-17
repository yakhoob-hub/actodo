import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"
import { useState } from "react"

function TodoContainer()
{
    const [activityArr,setActivityArr] = useState([
        {
            id:1,
            activity:"Go to Gym"
        },
        {
            id:2,
            activity:"Play Football"
        },
        {
            id:3,
            activity:"Watch Anime"
        }
    ])

    return(
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm  activityArr={activityArr} setActivityArr={setActivityArr}/>
                <TodoList activityArr={activityArr} setActivityArr={setActivityArr}/>
            </div>
        </div>
    )
}

export default TodoContainer