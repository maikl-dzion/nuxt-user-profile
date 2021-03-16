<template>
  <div>

    <header class="header-area">
<!--      <HeaderTop/>-->
    </header>

    <div class="container">

<!--      <InfoMessage-->
<!--        :message="respMessage"-->
<!--        :color="respColor"-->
<!--      ></InfoMessage>-->
<!--      <router-link v-if="respMessage" tag="a" to="/page/auth"-->
<!--                   style="width:250px;display:block; color:green; margin: -19px 0px 10px 0px; border-bottom:1px greenyellow solid"-->
<!--      >Перейти на страницу авторизации</router-link>-->

<!--      <p class="span-shadow">-->
<!--        <span class="btn-hover-effect square-out"  >ЭФФЕКТ 1</span>-->
<!--        <span class="btn-hover-effect shadow-live" >ЭФФЕКТ 2</span>-->
<!--        <span class="btn-hover-effect square-in"   >ЭФФЕКТ 3</span>-->
<!--        <span class="btn-hover-effect square-list" >ЭФФЕКТ 4</span>-->
<!--      </p>-->

<!--      <p class="span-shadow" style="border: 0px red solid; width: 220px; padding:0px; margin-bottom:10px;" >-->
<!--          <span  class="btn-hover-effect square-list"-->
<!--                 style="width: 100%; margin:0px; background:#337ab7; border: 0px red solid;">Добавить объявление</span>-->
<!--      </p>-->

      <h3 class="sidebar-title" style="margin-top:10px" >Регистрация</h3><hr/>

<!--      <pre>{{user}}</pre>-->

      <div class="col-md-12 col-xs-12">
        <div class="faq-form form-style" style="border:0px red solid; margin-bottom:20px;">

          <form id="cf" @submit.prevent="" >
            <div class="row">

              <div class="col-xs-12"
                   style="color:red; text-align: center; font-weight: bold; font-size: 18px; font-style: italic; padding: 15px;" > {{validateMessage}} </div>

              <FormInputRow
                name="username" title="Имя пользователя"
                :model="user" :param="{type: 'text', required: true, col: 12}" />

              <FormInputRow
                name="email" title="Email"
                :model="user" :param="{type: 'email', required: true, event : 'change'}"
                @input="getInput" />

              <FormInputRow
                name="password" title="Пароль"
                :model="user" :param="{type: 'text', required: true }"
                @input="getInput" />

              <FormInputRow
                name="repeat_password" title="Повторить пароль"
                :model="user" :param="{ type: 'text', required: true, event : 'change' }"
                @input="getInput" />

              <FormInputRow
                name="login" title="Логин"
                :model="user" @input="getInput" />

              <FormInputRow
                name="phone" title="Телефон"
                :model="user" @input="getInput" />

              <div class="col-xs-12"> <hr/> </div>

              <div class="col-xs-12">
                  <button @click="save()"
                          class="cont-submit btn-contact btn-style" >Сохранить</button>
              </div>

            </div>
          </form>

        </div>
      </div>

    </div> <!--- form container -->


    <Footer/>

  </div>
</template>

<script>

// import HeaderTop from '../components/app/HeaderTop'
// import HeaderMiddle from '../components/app/HeaderMiddle'
// import Footer from '../components/app/Footer'

export default {
  name: 'UserRegister',
  data() {
    return {

      respMessage: '',
      respColor: '',
      preloaderState: false,
      preloaderMessage: 'Подождите, идет сохранение',
      validateMessage : '',

      user: {
          username: '',
          email: '',
          password: '',
          login: '',
          phone: '',
          repeat_password : '',
      },

    }
  },

  components: {
    // HeaderTop, Footer
  },

  methods: {

    getInput(input) {

        const value  = input.value;
        const name   = input.name;
        const target = input.event.target;
        // console.log(next);

        this.validateMessage = '';

        switch(name) {
           case 'email' :
               this.checkEmailIsEmpty(input)
               return true;
          case 'repeat_password' :
               if(value != this.user.password) {
                  let message = 'Пароли не совпадают'
                  this.showDataValidError(target, message)
                  this.validateMessage = message;
               }
               break;
        }
        this.setInputValue('user', input);
    },

    async checkEmailIsEmpty(input) {
        if(!input.value)
            return false;
        this.validateMessage = '';
        const status = await this.checkUserEmail(input.value);
        if(status) {
            input.value = '';
            this.validateMessage = 'Такой email уже используется в системе, Вы не можете его использовать';
        }
        // setTimeout(() => {}, 2000)
        this.setInputValue('user', input);
    },

    showDataValidError(target, message) {
        target.style.color = 'red'
        let next = target.parentNode.childNodes[0];
        next.innerHTML = message;
    },

    save() {

      if (!this.validate())
        return false

      this.setPreloader(true)
      const postData = this.user
      const apiUrl = '/post/user/register'
      this.send(apiUrl, 'post', postData).then(this.registerResponseHandle)
    },

    validate() {

      const user = this.user;

      if(!this.validField(user.username, 'Вы не прописали имя'))
        return false

      if(!this.validField(user.email, 'Вы не прописали email'))
        return false

      if(!this.validField(user.password, 'Вы не установили пароль'))
        return false

      if(!this.validField(user.repeat_password, 'Нужно повторить пароль'))
        return false

      if(user.password != user.repeat_password) {
         this.validateMessage = 'Пароли не совпадают';
         return false;
      }

      this.user.login = (!user.login) ? user.username : user.login

      return true
    },

    validField(fieldValue, message){
        this.validateMessage = '';
        if (fieldValue)
          return true;
        this.validateMessage = message + ', это обязательное поле';
        setTimeout(() => { this.validateMessage = ''; }, 3000)
        return false;
    },

    registerResponseHandle(response) {
      const res = this.saveResponse(response, `Новый пользователь успешно создан`, 'Не удалось создать пользователя')
      if(res.status)
        this.$router.push('/page/auth')
    },

  } // --- methods

}
</script>

<style>
.input-label {
  color: #296dc1;
  font-style: italic;
  border-bottom: 1px #296dc1 solid;
  display: flex;
}
</style>
