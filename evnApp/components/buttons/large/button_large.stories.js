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
      control: { type: 'select', options: ['Primary','Secondary','Tertiary','Light','Medium Grey','Large Fixed','Large Flexible']}},
      adaptability: { control: 'select', options: ['Flexible', 'Fixed'] },
      disabled:   { control: 'boolean' },
      iconType:   {control: 'text'},
      className: { type: { name: 'button_large' } },
    },
};

const result = createElementFromHTML(button);

const Template = ({ label, className, ...args }) => {
  Template.args = { label: 'hello123' };
  Template.args = { className: 'button_large'}

  result.classList.add(className);
  result.innerHTML = label;
  if(result.classList.length > 2){
    var secondClass = result.classList[1]
    result.classList.remove(secondClass);
  }
  return result;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button Primary',
  className: 'button_primary',
};

console.log(Primary);

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Secondary',
  type: 'Secondary',
  className: 'button_secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button Tertiary',
  type: 'Tertiary',
  className: 'button_tertiary',
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button Light',
  type: 'Light',
  className: 'button_light',
};

export const MediumGrey = Template.bind({});
MediumGrey.args = {
  label: 'Button Grey',
  type: 'Medium Grey',
  className: 'button_grey',
};

export const LargeFixed = Template.bind({});
LargeFixed.args = {
  label: 'Button Large Fixed',
  type: 'Large Fixed',
  className: 'button_fixed',
};

export const LargeFlexible = Template.bind({});
LargeFlexible.args = {
  label: 'Button Large Flexible',
  type: 'Large Flexible',
  className: 'button_flexible',
};



