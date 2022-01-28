import SidebarNode from '../../components/SidebarNode';

export default {
  title: 'SidebarNode',
  component: SidebarNode,
};

const tree = [
  {
    "id": 0,
    "name": "Asset 0",
    "parentId": 0
  },
  {
    "id": 1,
    "name": "Asset 1",
    "parentId": 0
  }
]

const treeWithChild = [
  {
    "id": 0,
    "name": "Asset 0",
    "parentId": 0,
    child: [
      {
        "id": 1,
        "name": "Asset 1",
        "parentId": 0,
      }
    ]
  }
]


const Template = (args) => ({
  components: { SidebarNode },
  setup() {
    return { args, };
  },
  template: '<SidebarNode :tree="args.tree"/>',
});

export const Default = Template.bind({});
export const WithChild = Template.bind({});

Default.args = {
  tree: tree
}
WithChild.args = {
  tree: treeWithChild
}