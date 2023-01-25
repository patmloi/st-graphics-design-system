import Paragraph from './Paragraph.svelte'

export default {
    title: 'Components/Paragraph',
    component: Paragraph,
    //argTypes: {
    //  value: {control: 'range'},
    //  text: {control: 'text'}
    //}
  };
  
const Template = props => ({
    Component: Paragraph,
    props
  });
  
//  export const Template

  export const Primary = Template.bind({});
  Primary.args = {value: 'In Singapore, it was masks off and a relaxation of virus restrictions that saw crowds returning in throngs to malls and the city'};
