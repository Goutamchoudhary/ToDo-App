<template>
  <div :class="`task ${task.done ? 'is-complete' : ''}`">
    <div class="content">{{ task.content }}</div>
    <div class="buttons">
      <button @click="toggleDone"> {{ task.done ? 'undo' : 'done' }} </button>
      <button @click="removeTask" class="delete">Delete</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['task'],
    methods: {
      toggleDone(){
        // const taskItems = JSON.parse(localStorage.getItem('toDoItems'));
        // const updatedTaskItems = taskItems.items.map((item) => {
        //   if(this.task === item){
        //     item.done = !item.done;
        //     return item;
        //   }
        //   return item;
        // });

        this.$store.commit('TOGGLE_TASK', this.task);
        localStorage.setItem('toDoItems', JSON.stringify(this.$store.state.tasks));
      },
      removeTask(){
        // const taskItems = JSON.parse(localStorage.getItem('toDoItems'));
        // const updatedTaskItems = taskItems.items.map((item) => item !== this.task);

        this.$store.commit('REMOVE_TASK', this.task);
        localStorage.setItem('toDoItems', JSON.stringify(this.$store.state.tasks));
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
