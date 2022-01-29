import SidebarNode from '../../components/SidebarNode';
import { tree, treeWithChild } from '../assets/constants'

export default {
  title: 'SidebarNode',
  component: SidebarNode,
};



const Template = (args) => ({
  components: { SidebarNode },
  setup() {
    return { args };
  },
  template: '<div class="w-64"><SidebarNode :tree="args.tree"/></div>',
});

export const Default = Template.bind({});
export const WithChild = Template.bind({});

Default.args = {
  tree: tree
}
WithChild.args = {
  tree: treeWithChild
}