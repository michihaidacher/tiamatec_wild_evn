import { withLinks } from '@storybook/addon-links';
import './button_large.scss';
import button from './button_large.html';

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
}

export default {
  title: 'Components/Button/Large',
  argTypes: {
    type: {
      label: { type: { name: 'string' } },
      control: { type: 'select', options: ['Primary','Secondary','Tertiary','Light','Medium Grey','Fixed','Flexible']}},
      adaptability: { control: 'select', options: ['Flexible', 'Fixed'] },
      disabled:   { control: 'boolean' },
      iconType:   {control: 'text'},
      className: { type: { name: 'button_large' } },
    },
};

const buttonElement = createElementFromHTML(button);

const Template = ({ label, className, disabled, ...args }) => {
  Template.args = { label: 'hello123' };
  Template.args = { className: 'button_large'}

  // add class
  buttonElement.classList.add(className);
  // change label
  buttonElement.innerHTML = label;
  // disabled
  if(disabled){
    buttonElement.disabled = true;
  }else{
    buttonElement.disabled = false;
  }


  if(buttonElement.classList.length > 2){
    var secondClass = buttonElement.classList[1]
    buttonElement.classList.remove(secondClass);
  }
  return buttonElement;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button_primary',
  disabled: true
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

export const MediumGrey = Template.bind({});
MediumGrey.args = {
  label: 'Button',
  type: 'Medium Grey',
  className: 'button_grey',
};

export const LargeFixed = Template.bind({});
LargeFixed.args = {
  label: 'Button',
  type: 'Large Fixed',
  className: 'button_fixed',
};

export const LargeFlexible = Template.bind({});
LargeFlexible.args = {
  label: 'Button',
  type: 'Large Flexible',
  className: 'button_flexible',
};



