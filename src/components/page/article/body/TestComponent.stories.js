import TestCommponent from './TestComponent.svelte'

export default {
    title: 'Components/TestCommponent',
    component: TestCommponent,
    argTypes: {
      value: {control: 'range'},
      text: {control: 'text'}
    }
  };
  
  const Template = props => ({
    Component: TestCommponent,
    props
  });
  
  export const Primary = Template.bind({});
  Primary.args = {value: 10, text: 'Hello'};

  export const Secondary = Template.bind({});
  Secondary.args = {value: 20, text: 'World'};

  console.log(Template())