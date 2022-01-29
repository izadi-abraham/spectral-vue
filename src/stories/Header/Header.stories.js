import Header from '../../components/Header';
import '../../index.css';

export default {
  title: 'Header',
  component: Header,
};


const Template = (args) => ({
  components: { Header },
  setup() {
    return { args };
  },
  template: '<Header :msg="args.msg"/>',
});


export const Default = Template.bind({});
export const WithMsg = Template.bind({});
WithMsg.args = {
  msg: 'Header prop renders here',
};


