import Header from '../../components/Header';
import '../css/utils.css';

export default {
  title: 'Header',
  component: Header,
};


const Template = (args) => ({
  components: { Header },
  setup() {
    return { args };
  },
  template: '<Header :msg="args.msg" :show-toggle="args.showToggle" />',
});


export const Default = Template.bind({});
export const WithMsg = Template.bind({});
export const WithToggle = Template.bind({});
WithMsg.args = {
  msg: 'Header prop renders here',
};

WithToggle.args = {
  showToggle: true
}
