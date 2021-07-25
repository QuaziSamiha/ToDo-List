import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Task.module.css';
import { useState } from 'react';

interface IProps {
    task: string;
    // id: number;
    // handleRemove: (id: number) => void;
}

// const Task = ({ task, id, handleRemove }: IProps) => {

const Task = ({ task }: IProps) => {
    const [line, setLine] = useState(false);

    const handleDelete = () => {
        setLine(true);
    }
    return (
        <div>
            {/* <span onClick={() => handleRemove(id)} className={styles.delete_btn}> */}
            <span onClick={handleDelete} className={styles.delete_btn}>
                <DeleteIcon className={styles.delete_icon} />
            </span>
            <li style={{ textDecoration: line ? 'line-through' : 'none' }}>
                {/* <li> */}
                {task}
            </li>
        </div>
    );
};

export default Task;