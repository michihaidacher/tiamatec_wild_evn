import { withLinks } from '@storybook/addon-links';

import './welcome.css';
import welcome from './welcome.html';

export default {
  title: 'Welcome',
  decorators: [withLinks],
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
};

export const Welcome = () => welcome;
