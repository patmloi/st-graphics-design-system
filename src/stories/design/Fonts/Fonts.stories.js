import Fonts from './Fonts.svelte'

export default {
    title: 'Design/Fonts',
    component: Fonts,
    //argTypes: {
    //  value: {control: 'range'},
    //  text: {control: 'text'}
    //}
  };
  
  const Template = props => ({
    Component: Fonts,
    props
  });
  
  export const Primary = Template.bind({});
  Primary.args = {text: 'Hello'};
