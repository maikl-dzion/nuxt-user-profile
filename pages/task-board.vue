<template>
  <div class="task-page">

    <header class="bg-white shadow">
      <div class="container mx-auto max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
           Доска задач
        </h1>
      </div>
    </header>

    <main class="container mx-auto" >
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
         <pre>{{taskItems}}</pre>
      </div>
    </main>

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import ApiService from '~/api/api.service';
const api = new ApiService();

export default {
  name: "TaskBoard",
  data() {
    return {
       // taskItems : [],
    }
  },

  computed : {
     ...mapGetters({
          taskItems :  'task/getTasks'
     }),

    // taskItems () {
    //   let t = this.$store;
    //   return [];
    // },
  },

  methods : {

    ...mapActions({
         fetchTasks : 'task/fetchTasks'
    }),

    // async getTasks() {
    //     const response = await api.get('/task-board/list');
    //     this.taskItems = response;
    // },

  },

  mounted() {

    this.fetchTasks();

      // this.hello();
      // this.$services();
      // this.getTasks()
  },
}
</script>

<style scoped>

</style>
