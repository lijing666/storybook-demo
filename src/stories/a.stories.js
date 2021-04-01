import ComA from './com-a.vue';
import ComB from './com-b.vue';

export default {
  title: 'fuse-ui/com-a',
  component: ComA
};
const tagTemplate=`<com-b v-for="(items,index) in itemsArray||[]" :key="index" :items="items"></com-b>`
const coreTemplate=`<com-a v-bind="$props" @click.native="onClick"></com-a>`;

const template=`<div class="flex-center">
${tagTemplate}
${coreTemplate}
</div>`

const Template = (args, { argTypes }) => {
  return ({
    components:{
      ComA,
      ComB
    },
    props: Object.keys(argTypes),
    data(){
      return {
        items: ['bb1','bb2','bb3','bb4'],
        itemsArray:null
      }
    },
    template: template,
    methods:{
      onClick(){
        this.itemsArray=[['b1','b2','b3','b4'],['b21','b22','b23','b24']];
      }
    }
  });
}

export const Primary = Template.bind({});
Primary.args={
  text:'aa'
}
Primary.storyName='com-a';