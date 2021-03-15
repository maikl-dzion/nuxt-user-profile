<template>
  <div class="task-page">

    <header class="bg-white shadow">
      <div class="container mx-auto max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
           Admin-panel
        </h1>
      </div>
    </header>

    <main class="container mx-auto" >
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">

        <button type="button" class="btn btn-primary">Button</button>

        <!--        <pre>User Id - {{getUserId}}</pre>-->
<!--        <pre>{{userItems}}</pre>-->
<!--        <pre>{{selectedUser}}</pre>-->


      </div>
    </main>

  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import ApiService from '~/api/api.service';

const api = new ApiService();

export default {
  name: "AdminPanel",
  data() {
    return { }
  },

  computed : {
     ...mapGetters({
          userItems :  'user/getUsers',
          useGetting : 'user/useGetting'
     }),

    getUserId() {
         return this.getStore('user', 'userId')
    },

     selectedUser() {
         const fieldName = 'selectedUser';
         return this.getStore('user', fieldName)
     },
  },

  methods : {

    ...mapActions({
         userFetching : 'user/useFetching',
         fetchUsers   : 'user/fetchUsers'
    }),

    getUserById(userId) {
       const url   = '/get/user-by-id/' + userId;
       const field = 'selectedUser';
       this.userFetching({ url, field });
    },

    fetchUsers() {
      this.userFetching({ url : '/get/users', field : 'users'});
    },

  },

  mounted() {
     this.fetchUsers();
     this.getUserById(21);
  },

}
</script>

<style >

</style>
