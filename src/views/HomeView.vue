<script setup>
  import {taskFactory} from '../toDoSetup';

  const {incompleteTasks, completedTasks, toggle, deleteTask} = taskFactory();

</script>

<template>
  <h3>To Do List</h3>
  <ul id="incomplete-tasks">
    <li v-for="task in incompleteTasks" :key="task.id" @click="toggle(task.id)">
      <input type="checkbox">
      <label>{{ task.name }}</label>
      <button class="delete" @click="deleteTask(task.id)">Delete</button>
    </li>
  </ul>
  <h3>Completed</h3>
  <ul id="completed-tasks">
    <li v-for="task in completedTasks" :key="task.id" @click="toggle(task.id)">
      <input type="checkbox" checked>
      <label>{{ task.name }}</label>
      <button class="delete" @click="deleteTask(task.id)">Delete</button>
    </li>
  </ul>
</template>

<style>
</style>