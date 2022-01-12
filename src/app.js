import Vue from "vue";
import Button from "./Button"
import Icon from "./Icon";
import ButtonGroup from "./Button-group";
import Input from "./Input";

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        message: 'hi'
    },
    methods:{
        inputChange(e){
            console.log(e)
        }
    }
})

