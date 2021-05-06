import { withLinks } from '@storybook/addon-links';
import './button_small.scss';
import button from './button_small.html';

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
}

export default {
  title: 'Components/Button/Small',
  argTypes: {
    type: {
      label: { type: { name: 'string' } },
      control: { type: 'select', options: ['Primary','Secondary','Tertiary','Light','Medium Grey','Small Fixed','Small Flexible']}},
      adaptability: { control: 'select', options: ['Flexible', 'Fixed'] },
      disabled:   { control: 'boolean' },
      iconType:   {control: 'text'},
      className: { type: { name: 'button_small' } },
    },
};

const result = createElementFromHTML(button);

const Template = ({ label, className, ...args }) => {
  Template.args = { label: 'hello123' };
  Template.args = { className: 'button_small'}

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
  label: 'Button',
  className: 'button_primary',
};

//console.log(Primary);

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



