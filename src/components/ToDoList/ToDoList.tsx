import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import React from 'react';
import styles from './ToDoList.module.css';
import { useState } from 'react';
import Task from '../Task/Task';

interface ITask {
    // taskName: string;
    // id: number;
}

const ToDoList = () => {

    // const [newTask, setNewTask] = useState<ITask>({} as ITask);
    // const [taskList, setTaskList] = useState<ITask[]>([]);


    const [newTask, setNewTask] = useState('');
    const [taskList, setTaskList] = useState<string[]>([]);

    const handleNewTask = (event: React.FocusEvent<HTMLInputElement>) => {
        // setNewTask({ ...newTask, [newTask.taskName]: event.target.value });
        setNewTask(event.target.value);
    }

    const handleAddBtn = () => {
        if (newTask !== '') {
            // newTask.id += 1;
            setTaskList([...taskList, newTask]);
            // newTask.id = newTask.id + 1;
            // setNewTask({
            //     taskName: '',
            //     id: count + 1
            // })
            setNewTask('');
        }
    }

    // const handleDeleteBtn = (id: number) => {
    //     console.log(id);
    //     const newTaskList = taskList.filter(taskId => taskId.id !== id)
    //     setTaskList(newTaskList);
    // }

    // console.log('task list:', taskList);

    return (
        <div>
            <section className={styles.todo_app}>
                <h2>ToDo List</h2>
                <input type="text"
                    placeholder='Add New Task'
                    // onBlur={(e) => setNewTask({ [e.target.taskName: e.target.value]})}
                    // value={newTask.taskName}
                    onBlur={handleNewTask}
                />
                <Button onClick={handleAddBtn} >
                    <AddIcon className={styles.add_btn} />
                </Button>

                <ul className={styles.task_list}>
                    {
                        // taskList.map((task, index) => <Task
                        //     key={index}
                        //     task={task.taskName}
                        //     id={task.id += index}
                        //     handleRemove={handleDeleteBtn} />)

                        taskList.map((task, index) => <Task
                            key={index}
                            task={task} />)

                    }
                </ul>
            </section>
        </div>
    );
};

export default ToDoList;