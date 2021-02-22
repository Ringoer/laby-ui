import LabyComponent1 from "../examples/Card/Card1.example.vue";
import LabyComponent2 from "../examples/Card/Card2.example.vue";

export default {
  components: [
    LabyComponent1,
    LabyComponent2,
  ],
  attributes: [
    { attr: 'color', desp: '外边框颜色', type: 'string', values: '任意合法颜色值', default: '#fe9acf' }
  ]
};