import Colors from './Colors.svelte'

export default {
    title: 'Design/Colors',
    component: Colors,
    //argTypes: {
    //  value: {control: 'range'},
    //  text: {control: 'text'}
    //}
  };
  
  const Template = props => ({
    Component: Colors,
    props
  });
  
  export const Primary = Template.bind({});
  Primary.args = {text: 'Hello'};
