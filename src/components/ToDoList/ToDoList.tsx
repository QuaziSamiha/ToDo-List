import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import React from 'react';
import styles from './ToDoList.module.css';
import { useState } from 'react';
import Task from '../Task/Task';

interface ITask {
    taskName: string,
    id: number,
}

const ToDoList = () => {

    const [newTask, setNewTask] = useState<ITask>({} as ITask);
    const [taskList, setTaskList] = useState<ITask[]>([]);

    const handleNewTask = (event: React.FocusEvent<HTMLInputElement>) => {
        setNewTask({
            ...newTask,
            [event.target.name]: event.target.value
        });
    }

    const handleAddBtn = () => {
        if (newTask.taskName !== '') {
            setTaskList([...taskList, newTask]);
            setNewTask({} as ITask);
        }
    }

    const handleDeleteBtn = (id: number) => {
        const newTaskList = taskList.filter(taskId => taskId.id !== id)
        setTaskList(newTaskList);
    }

    return (
        <div>
            <section className={styles.todo_app}>

                <h2>ToDo List</h2>
                <input type="text"
                    placeholder='Add New Task'
                    name='taskName'
                    value={newTask.taskName}
                    onBlur={handleNewTask}
                />
                <Button onClick={handleAddBtn} >
                    <AddIcon className={styles.add_btn} />
                </Button>

                <ul className={styles.task_list}>
                    {
                        taskList.map((task, index: number) => <Task
                            key={index}
                            task={task.taskName}
                            id={task.id = index + 1}
                            handleRemove={handleDeleteBtn}
                        />)
                    }
                </ul>
            </section>
        </div>
    );
};

export default ToDoList;