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
// arrow svg
const arrowSvgList = buttonHtml.querySelectorAll('svg');

// arrow svg path
const arrowSvgPath = buttonHtml.querySelectorAll('path');



// svg container
const arrowSvgContainerList =  buttonHtml.querySelectorAll('evn-icon');


const Template = ({ label, className, disabled, control, adaptability, iconType, type, ...args }) => {
  Template.args = { label: 'hello123' };
  Template.args = { className: 'button_large' }
  Template.args = { control: 'button_large' }
  Template.args = { adaptability: 'flexible' }
  Template.args = { iconType: 'arrow-right' }
  Template.args = { type: 'button-primary' }

  

  // change label
  spanElement.innerHTML = label;
  
  // START DISABLE CONTROL
  function changeSvgPathStrokeOnDisable(disable){
    Array.prototype.forEach.call(arrowSvgPath, function(el, index, array){
      if(disable){
        el.classList.add("svgArrowDisabled");
      }else{
        el.classList.remove("svgArrowDisabled");
      }
    });
  }
  function changeSvgColorOnDisable(disable){
    Array.prototype.forEach.call(arrowSvgContainerList, function(el, index, array){
      if(disable){
        el.classList.add("svgContainerDisabled");
      }else{
        el.classList.remove("svgContainerDisabled");
      }
    });
  }
  // disable button if set
  if (disabled) {
    realButton.disabled = true;
    changeSvgColorOnDisable(true);
    changeSvgPathStrokeOnDisable(true);

  } else {
    realButton.disabled = false;
    changeSvgColorOnDisable(false);
    changeSvgPathStrokeOnDisable(false);
  }

  // buttons first class is button large class
  // second class (old) will be deleted and new second class added
  var lastClass = realButton.classList[realButton.classList.length -1];

  // remove fixed and flexible class if set
  realButton.classList.remove("button-fixed");
  realButton.classList.remove("button-flexible");
  // add adaptability class
  switch(adaptability){
    case 'Fixed':
        realButton.classList.add('button-fixed');
      break;

    case 'Flexible':
      realButton.classList.add('button-flexible');
      break;

    default:
      realButton.classList.add('button-fixed');
      break;
  }
  // remove last class ( lastClass is here still the button-primay/button-secondary...)
  // then add correct class
  realButton.classList.remove(lastClass);

  switch(type){
    case 'Primary':
      className = 'button-primary';
    break;
    case 'Secondary':
      className = 'button-secondary';
    break;
    case 'Tertiary':
      className = 'button-tertiary';
    break;
    case 'Light':
      className = 'button-light';
    break;
    case 'Medium Grey':
      className = 'button-grey';
    break;
    case 'Large Fixed':
      className = 'button-fixed';
    break;
    case 'Large Flexible':
      className = 'button-flexible';
    break;
  }



  realButton.classList.add(className);

  
  function rotateArrow(degree){
    Array.prototype.forEach.call(arrowSvgList, function(el, index, array){
      el.setAttribute("transform", "rotate("+degree+")");
    });
  }
  // rotate arrow
  switch(iconType){
    case 'arrow-right':
      rotateArrow(0);
    break;
    case 'arrow-left':
      rotateArrow(180);
    break;
    case 'arrow-up':
      rotateArrow(270);
    break;
    case 'arrow-down':
      rotateArrow(90);
    break;
    default:
      rotateArrow(0);
    break;
  }


  return buttonElement;
};

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button-primary',
  control: 'button-primary',
  disabled: false,
  adaptability: 'button-flexible'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  className: 'button-secondary',
  control: 'button-secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  className: 'button-tertiary',
  control: 'button-tertiary',
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button',
  className: 'button-light',
  control: 'button-light',
};

export const MediumGrey = Template.bind({});
MediumGrey.args = {
  label: 'Button',
  className: 'button-grey',
  control: 'button-grey',
};

export const LargeFixed = Template.bind({});
LargeFixed.args = {
  label: 'Button',
  className: 'button-fixed',
  control: 'button-fixed',
};

export const LargeFlexible = Template.bind({});
LargeFlexible.args = {
  label: 'Button',
  className: 'button-flexible',
  control: 'button-flexible',
};



