import PhotoScrolly from "./PhotoScrolly.svelte";

export default {
    title: 'Components/Photoscrolly',
    component: PhotoScrolly,
    tags: ['autodocs'],
    //argTypes: {
    //  value: {photo: 'text'},
    //  text: {justify: 'text'}
    //}
  };
  
  const Template = props => ({
    Component: PhotoScrolly,
    props
  });

  let v = [
    {
       "photo":"news/news-1.jpg",
       "title":"Feb 7",
       "caption":"French President Emmanuel Macron (right)",
       "credits":"PHOTO: AFP",
       "position":"bottom",
       "justify":"flex-start"
    },
    {
       "photo":"news/news-1.jpg",
       "title":"Feb 8",
       "caption":"French President Emmanuel Macron (right)",
       "credits":"PHOTO: AFP"
    },
    {
       "photo":"news/news-1.jpg",
       "title":"Feb 8",
       "caption":"French President Emmanuel Macron (right)",
       "credits":"PHOTO: AFP",
       "justify":"flex-end",
       "position":"bottom"
    }
 ]
  
  export const Primary = Template.bind({});
  Primary.args = {value: v};

