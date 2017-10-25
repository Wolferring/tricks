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
      @keyup="updateValue($event.target.value)"
      @focus="inputFocus()"
      @blur="inputBlur()"
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
      if (this.must && !this.valid) {
        this.validReg = new RegExp(/^\S+$/)
      } else {
        this.validReg = new RegExp(this.valid)
      }
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
      },
      inputFocus () {
        this.focus = true
        this.focused = true
        if (this.type === 'password') {
          this.$emit('input', '')
        }
      },
      inputBlur () {
        this.focus = false
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
      font-size: 16px;
      line-height:2.5;
    }

    label{
      position: absolute;
      bottom: 50%;
      transform:translateY(50%);
      z-index: 0;
      left: 0;
      font-size: inherit;
      color: @font-grey;
      transition:all .2s ease-out;
      &.top{
        font-size: 12px;
        bottom: 100%;
        transform:translateY(0);
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