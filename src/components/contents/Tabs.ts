import LabyComponent1 from "../examples/Tabs/Tabs1.example.vue";
import LabyComponent2 from "../examples/Tabs/Tabs2.example.vue";
import LabyComponent3 from "../examples/Tabs/Tabs3.example.vue";

export default {
  components: [
    LabyComponent1,
    LabyComponent2,
    LabyComponent3,
  ],
  attributes: [
    { attr: 'direction', desp: '方向', type: 'string', values: 'row / column', default: 'row' },
    { attr: 'selected', desp: '默认选中', type: 'string', values: '子项的 name', default: '必填' },
    { attr: 'color', desp: '颜色', type: 'string', values: '任意合法颜色值', default: '#f3678e' },
  ]
};