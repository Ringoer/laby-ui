import LabyComponent1 from "../examples/Button/Button1.example.vue";
import LabyComponent2 from "../examples/Button/Button2.example.vue";
import LabyComponent3 from "../examples/Button/Button3.example.vue";
import LabyComponent4 from "../examples/Button/Button4.example.vue";
import LabyComponent5 from "../examples/Button/Button5.example.vue";
import LabyComponent6 from "../examples/Button/Button6.example.vue";

export default {
  components: [
    LabyComponent1,
    LabyComponent2,
    LabyComponent3,
    LabyComponent4,
    LabyComponent5,
    LabyComponent6,
  ],
  attributes: [
    { attr: 'level', desp: '默认类型', type: 'string', values: 'default / plain / primary / success / info / warning / danger', default: 'default' },
    { attr: 'disabled', desp: '是否禁用', type: 'boolean', values: 'false / true', default: 'false' },
    { attr: 'theme', desp: '式样', type: 'string', values: 'button / link / text', default: 'button' },
    { attr: 'loding', desp: '是否加载中', type: 'boolean', values: 'false / true', default: 'false' },
    { attr: 'size', desp: '尺寸', type: 'string', values: 'middle / small / large', default: 'middle' },
    { attr: 'color', desp: '颜色', type: 'string', values: '任意合法颜色值', default: '#f3678e' },
  ]
};