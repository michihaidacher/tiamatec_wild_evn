import { withLinks } from '@storybook/addon-links';
import './button_small.scss';
import * as button from './button_small.html';


export default {
  title: 'Components/Button/Small',
  argTypes: {
    type: {
      label: { type: { name: 'string' } },
      iconPosition: { control: 'radio', options: ['left', 'right'] },
      control: { type: 'select', options: ['Primary','Secondary','Tertiary','Light','Medium Grey','Small Fixed','Small Flexible']}},
      disabled:   { control: 'boolean' },
      icon:   { control: 'boolean' },
      iconType:   {control: 'text'},
      className: { type: { name: 'button_small' } },
    },
};


function createElementFromHTML(htmlString) {

  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div; 
}

// whole html element
const buttonHtml = createElementFromHTML(button);
// evn html element
const buttonElement = buttonHtml.children[0];
// real button
const realButton = buttonHtml.children[0].children[0];

console.log(realButton);



const result = createElementFromHTML(button);

const Template = ({ label, className, type, iconPosition, icon, disabled,  ...args }) => {
  Template.args = { label: 'hello123' };
  Template.args = { className: 'button_small'};
  Template.args = { type: 'button-primary' };
  Template.args = { iconPosition: 'left' };
  Template.args = { icon: 'left' };
  Template.args = { disabled: true };


  if(disabled){
    realButton.classList.add('disabled');
  }else{
    realButton.classList.remove('disabled');
  }

  result.classList.add(className);
  result.innerHTML = label;

  return buttonElement;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button_primary',
  iconPosition: 'left',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'Secondary',
  className: 'button_secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  type: 'Tertiary',
  className: 'button_tertiary',
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button',
  type: 'Light',
  className: 'button_light',
};

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  label: 'Button',
  type: 'Medium Light',
  className: 'button_light',
};

export const IconLeft = Template.bind({});
IconLeft.args = {
  label: 'Button',
  type: 'Icon Left',
  className: 'button_icon_left',
};

export const IconRight = Template.bind({});
IconRight.args = {
  label: 'Button',
  type: 'Icon Right',
  className: 'button_icon_right',
};



