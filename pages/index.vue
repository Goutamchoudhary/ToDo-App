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

     <!-- <Task
      v-for="(task, idx) in $store.state.tasks"
      :key="idx"
      :task="task"
    /> -->

    <Task
      v-for="(task, idx) in propertyComputed"
      :key="idx"
      :task="task"
      :localStorageItems="localStorageItems"
    />

    </div>

  </main>
</template>

<script>
export default {
  data () {
    return{
      newTask: '',
      localStorageItems: []
    }
  },
  methods: {
    addTask() {
      if(this.newTask) {
        //this.$store.commit('ADD_TASK', this.newTask);
        if (JSON.parse(localStorage.getItem("toDoItems")) !== null) {
          const taskItems = JSON.parse(localStorage.getItem("toDoItems"));
          taskItems.items.unshift({content: this.newTask, done: false})
          this.localStorageItems = taskItems;
          localStorage.setItem('toDoItems', JSON.stringify(taskItems));
        }
        else{
          const taskItems = { items: [] };
          taskItems.items.unshift({content: this.newTask, done: false});
          this.localStorageItems = taskItems;
          localStorage.setItem("toDoItems", JSON.stringify(taskItems));
        }
        this.newTask = '';

      }
    }
  },
  computed: {
    propertyComputed(){
      console.log("Hello");
      this.localStorageItems = JSON.parse(localStorage.getItem('toDoItems'))?.items;
      return this.localStorageItems;
    }
  }
  // mounted() {
  //   this.$nextTick(() => {
  //     this.localStorageItems = JSON.parse(localStorage.getItem('toDoItems'))?.items;
  //   })
  // },
}
</script>
