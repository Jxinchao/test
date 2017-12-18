/**
 * Created by Administrator on 2017/12/18.
 */
import index from './text.vue';
import Vue from 'vue';


new Vue({
  el:'#app',
  render: mod => mod(index)
});
