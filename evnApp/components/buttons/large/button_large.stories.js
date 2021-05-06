import { withLinks } from '@storybook/addon-links';
import './button_large.scss';
import * as button from './button_large.html';

export default {
  title: 'Components/Button/Large',
  argTypes: {
    type: {
      label: { type: { name: 'string' } },
      control: { type: 'select', options: ['Primary', 'Secondary', 'Tertiary', 'Light', 'Medium Grey', 'Fixed', 'Flexible'] }
    },
    adaptability: { control: 'select', options: ['Flexible', 'Fixed'] },
    disabled: { control: 'boolean' },
    iconType: { control: 'text' },
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
// button html element
const realButton = buttonHtml.children[0].children[0];

// span html element
const spanElement = buttonHtml.children[0].children[0].children[0].children[0];

const Template = ({ label, className, disabled, control, ...args }) => {
  Template.args = { label: 'hello123' };
  Template.args = { className: 'button_large' }
  Template.args = { control: 'button_large' }

  // change label
  spanElement.innerHTML = label;

  // add class on switching stories
  //buttonElement.classList.add(className);
  
  
  //realButton.classList.remove('button-primary');
  //realButton.classList.add('test');

  // disabled
  if (disabled) {
    realButton.disabled = true;
  } else {
    realButton.disabled = false;
  }

  // buttons first class is button large class
  // second class (old) will be deleted and new second class added
  var lastClass = realButton.classList[realButton.classList.length -1];
  realButton.classList.remove(lastClass);
  realButton.classList.add(className);

  if (buttonElement.classList.length > 2) {
    var secondClass = buttonElement.classList[1]
    buttonElement.classList.remove(secondClass);
  }

  return buttonElement;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button_primary',
  control: 'button_primary',
  disabled: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  className: 'button_secondary',
  control: 'button_secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  className: 'button_tertiary',
  control: 'button_tertiary',
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button',
  className: 'button_light',
  control: 'button_light',
};

export const MediumGrey = Template.bind({});
MediumGrey.args = {
  label: 'Button',
  className: 'button_grey',
  control: 'button_grey',
};

export const LargeFixed = Template.bind({});
LargeFixed.args = {
  label: 'Button',
  className: 'button_fixed',
  control: 'button_fixed',
};

export const LargeFlexible = Template.bind({});
LargeFlexible.args = {
  label: 'Button',
  className: 'button_flexible',
  control: 'button_flexible',
};



