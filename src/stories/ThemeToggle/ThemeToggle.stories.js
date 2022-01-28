import ThemeToggle from '../../components/ThemeToggle';
import { action } from "@storybook/addon-actions";

export default {
  title: 'ThemeToggle',
  component: ThemeToggle,
  argTypes: {
    toggleTheme: {},
  },
};

// export const actionsData = {
//   toggleTheme: action('toggleTheme'),
// };

const Template = (args, { argTypes }) => ({
  components: { ThemeToggle },
  setup() {
    return { args, /*toggleTheme: action('toggleTheme')*/ };
  },
  template: '<ThemeToggle/>',
});

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   user: null,
// };

export const Default = Template.bind({});

// export const WithProp = Template.bind({});
// WithProp.args = {
//   msg: 'header prop',
// };
