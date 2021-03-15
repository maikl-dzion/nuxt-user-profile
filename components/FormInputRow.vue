<template>
  <div :class="'col-xs-' + colNum">
    <div class="row">
      <!---- LABEL ----->
      <div class="col-xs-4">
        <div class="input-label">
          <div v-if="required" style="color:red; font-weight: bold; margin:-10px 0px 0px 0px;">*</div>
          <div>{{title}}</div>
        </div>
      </div>

      <!---- INPUT ----->
      <div class="col-xs-8">
        <input v-if="_event == 'change'"
            v-model="model[name]"  :type="type" :placeholder="title" @change="emitValue" :required="required" >
        <input v-else
            v-model="model[name]"  :type="type" :placeholder="title" @input="emitValue" :required="required" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "FormInputRow",
props: ['model', 'name', 'title', 'param'],

computed: {
    type() {
        let type = 'text';
        if(this.param && this.param.type)
           type = this.param.type
        return type;
    },

    required() {
        let required = false;
        if(this.param && this.param.required)
          required = true
        return required;
    },

    colNum() {
      let value = 12;
      if(this.param && this.param.col)
          value = this.param.col
      return value;
    },

    _event() {
      let value = 'input';
      if(this.param && this.param.event)
        value = this.param.event
      return value;
    }
},

methods : {
    emitValue() {
       const name  = this.name;
       const value = this.model[name];
       this.$emit('input', { name, value });
    },
},

}
</script>

<style scoped>

</style>
