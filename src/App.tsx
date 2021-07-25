import styles from './App.module.css';
import ToDoList from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className={styles.App}>
      <ToDoList />
    </div>
  );
}

export default App;
