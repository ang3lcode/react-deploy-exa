import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm'

export function App() {
  return (
    <main>
      <div>
        <TaskForm/>
        <TaskList/>
      </div>
    </main>
  );
}

