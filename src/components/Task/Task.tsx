import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from './Task.module.css';

interface IProps {
    task: string,
    id: number,
    handleRemove: (id: number) => void,
}

const Task = ({ task, id, handleRemove }: IProps) => {
    return (
        <div>
            <span onClick={() => handleRemove(id)} className={styles.delete_btn}>
                <DeleteIcon className={styles.delete_icon} />
            </span>
            <li>
                {task}
            </li>
        </div>
    );
};

export default Task;