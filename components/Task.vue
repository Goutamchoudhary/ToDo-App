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
    props: ['task', 'localStorageItems'],
    methods: {
      toggleDone(){

        this.localStorageItems[this.localStorageItems.indexOf(this.task)].done = !this.task.done;

        // this.$store.commit('TOGGLE_TASK', this.task);
        localStorage.setItem('toDoItems', JSON.stringify({items: this.localStorageItems}));
      },
      removeTask(){

        this.localStorageItems.splice(this.localStorageItems.indexOf(this.task), 1);

        //this.$store.commit('REMOVE_TASK', this.task);
        localStorage.setItem('toDoItems', JSON.stringify({items: this.localStorageItems}));
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
