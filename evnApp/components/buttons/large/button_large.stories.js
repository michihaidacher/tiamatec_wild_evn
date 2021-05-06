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
      control: { type: 'select', options: ['Primary', 'Secondary', 'Tertiary', 'Light', 'Medium Grey', 'Fixed', 'Flexible'] }
    },
    adaptability: { control: 'select', options: ['Flexible', 'Fixed'] },
    disabled: { control: 'boolean' },
    iconType: { control: 'text' },
  },
};

const buttonElement = createElementFromHTML(button);

const Template = ({ label, className, disabled, control, ...args }) => {
  Template.args = { label: 'hello123' };
  Template.args = { className: 'button_large' }
  Template.args = { control: 'button_large' }


  // change label
  buttonElement.innerHTML = label;

  // add class on switching stories
  buttonElement.classList.add(className);

  // add Class on switching type
  var newClass = '';
  switch (control) {
    case 'Primary':
      newClass = 'button_primary';
      break;
    case 'Secondary':
      newClass = 'button_secondary';
      break;
    case 'Tertiary':
      newClass = 'button_tertiary';
      break;
    case 'Light':
      newClass = 'button_light';
      break;
    case 'Medium Grey':
      newClass = 'button_grey';
      break;
    case 'Fixed':
      newClass = 'button_fixed';
      break;
    case 'Flexible':
      newClass = 'button_flexible';
      break;
  }

  //buttonElement.classList.add(newClass);

  // disabled
  if (disabled) {
    buttonElement.disabled = true;
  } else {
    buttonElement.disabled = false;
  }

  // buttons first class is button large class
  // second class (old) will be deleted and new second class added
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



