import { withLinks } from '@storybook/addon-links';

import './welcome.scss';
import welcome from './welcome.html';


function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild; 
}

export default {
  title: 'Welcome',
  decorators: [withLinks],
  argTypes: {
    label: { type: { name: 'string' } },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

const Template = ({ label }) => {
  Template.args = { label: 'hello123' };
  var result = createElementFromHTML(welcome);
  
  result.innerHTML = label; // changing label
  return result;
};

export const Hellou = Template.bind({});
Hellou.args = { label: 'Hello!' };

export const Hello = Template.bind({});
Hello.args = { label: 'Hello!' };

export const Bonjour = Template.bind({});
Bonjour.args = { label: 'Bonjour!' };
