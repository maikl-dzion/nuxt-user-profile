<template><div>

  <HeaderPanel/>

</div></template>

<script>
import HeaderPanel from '@/components/app/HeaderPanel'
export default {
  name: "Navbar",

  data() {
    return {
        pageLinks : [
          // { title : 'Главная', url : '/' },
          { title : 'Доска задач', url : '/task-board' },
          { title : 'Админ-панель', url : '/admin-panel' },
          { title : 'О нас', url : '/about' },
        ]
    }
  },

  components : {
    HeaderPanel
  },

}
</script>

<style scoped>
    .nuxt-link-active {
      background: gainsboro;
      color:black;
    }
</style>
