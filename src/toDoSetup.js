import toDo from './mock/toDo';
import { ref, computed } from 'vue'

const tasks = ref([...toDo]);

const incompleteTasks = computed(() => tasks.value.filter(t => !t.completed));
const completedTasks = computed(() => tasks.value.filter(t => t.completed));

const toggle = (taskId) => {
  const task = tasks.value.find(t => t.id === taskId);
  if (task?.completed !== undefined) task.completed = !task.completed;
};

const deleteTask = (taskId) => {
  tasks.value = tasks.value.filter(t => t.id !== taskId);
}

const taskFactory = () => ({incompleteTasks, completedTasks, toggle, deleteTask});

export {taskFactory};