<template>
  <main>
    <h1>Task Board</h1>
    <p>Create a list of tasks</p>

    <div class="create-new">
      <input
        type="text"
        v-model="newTask"
        placeholder="Add a new Task"
        @keypress.enter="addTask" />
        <button @click="addTask">Add</button>
    </div>

    <div class="tasks">
     <!-- Component -->
     <!-- {{ $store.state.tasks }} -->

     <Task
      v-for="(task, idx) in $store.state.tasks"
      :key="idx"
      :task="task"
    />

    </div>

  </main>
</template>

<script>
export default {
  data () {
    return{
      newTask: ''
    }
  },
  methods: {
    addTask() {
      if(this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        // if (JSON.parse(localStorage.getItem("toDoItems")) !== null) {
        //   const taskItems = JSON.parse(localStorage.getItem("toDoItems"));
        //   taskItems.items.unshift(this.newTask)
        //   localStorage.setItem('toDoItems', JSON.stringify(taskItems));
        // }
        // else{
        //   const taskItems = { items: [] };
        //   taskItems.items.unshift(this.newTask);
        //   localStorage.setItem("toDoItems", JSON.stringify(taskItems));
        // }

        localStorage.setItem("toDoItems", JSON.stringify(this.$store.state.tasks));
        this.newTask = '';
      }
    }
  }
}
</script>
