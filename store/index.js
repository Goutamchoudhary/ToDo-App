export const state = () => ({
  tasks: []
});

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks = [{content: task, done: false}, ...state.tasks];
    // OR
    //state.tasks.push({content: task, done: false});
    // OR use unshift to put tasks in front
  },

  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1);
  },

  TOGGLE_TASK(state, task) {
    state.tasks[state.tasks.indexOf(task)].done = !task.done;
  }
}
