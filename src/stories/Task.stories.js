import React from 'react'
import Task from '../components/Task'
import TaskBoxSameAsApp from "./TaskBookSameAsApp"
export default {
    title: "Task",
    component: Task
}

export function TaskBox(){
    return(<TaskBoxSameAsApp></TaskBoxSameAsApp>)
}
// interface TaskProps {
//     task: {
//         id: string;
//         description: string;
//     }
// }