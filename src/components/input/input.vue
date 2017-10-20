<template>
  <div 
    class="form-group"
    :class="{
      'border-bottom':focus||notEmpty,
      'has-error':error,
      'has-valid':success
    }"
  >
    <label :class="{'top':focus||notEmpty}" v-if="placeholder">
      {{placeholder}}
    </label>
    <input 
      spellcheck="false" 
      :type="type" 
      class="form-control"
      :value="value"
      @input="updateValue($event.target.value)"
      @focus="focus = true;focused=true"
      @blur="focus = false"
      :maxlength="maxlength"
      >
  </div>  
</template>
<script>
  export default{
    data () {
      return {
        focus: false,
        focused: false,
        validReg: ''
      }
    },
    created () {
      this.validReg = new RegExp(this.valid)
    },
    computed: {
      notEmpty () {
        return this.value.length > 0
      },
      error () {
        return (this.focused ? !(this.validReg).test(this.value) : false)
      },
      success () {
        return (this.focused ? (this.validReg).test(this.value) : false)
      }
    },
    methods: {
      updateValue (value) {
        this.$emit('input', value)
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      placeholder: {
        type: String
      },
      must: {
        type: Boolean,
        default: false
      },
      maxlength: String,
      valid: [Object, String],
      name: String,
      value: [Number, String, Boolean]
    }
  }
</script>
<style lang="less" scoped>
@import url('../../assets/less/var.less');
  .form-group{
    position: relative;
    margin: 20px 0;
    // outline:1px solid red;
    .form-control{
      position: relative;
      z-index: 1;
      background-color: initial;
    }

    label{
      position: absolute;
      bottom: 5px;
      z-index: 0;
      left: 0;
      font-size: inherit;
      color: @font-grey;
      transition:all .2s ease-out;
      &.top{
        font-size: 12px;
        bottom: 100%;
        color: @font-black;
      }
    }

    &:after{
      content: "";
      position: absolute;
      left: 0;
      right: 100%;
      bottom: 0;
      background: #fff;
      transition:all .2s linear;
    }
    &.border-bottom{
      &:after{
        left: 0;
        right: 0;
        background-color: @border-color;
      }
    }
    &.has-error{
      label{
        color: @font-danger;
      }
      &:after{
        background-color: @font-danger;
      }
    }  
    &.has-valid{
      label{
        color: @font-success;
      }
      &:after{
        background-color: @font-success;
      }
    }         
    &.full{
      flex:1;
      width: 100%;
      .form-control{
        width: 100%;
      }
    }
  }  
</style>