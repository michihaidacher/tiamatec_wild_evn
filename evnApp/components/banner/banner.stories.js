import './banner.scss';
import banner from './banner.html';

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
}

export default {
  title: 'Components/Banner',
  argTypes: {
    type: {
      control: { type: 'select', options: ['default', 'success', 'warning', 'error'] }
    },
    closeBtn: { control: 'boolean' },
    iconType: { control: 'text' },
    labelTxt: { control: 'text' },
    link1Href: { control: 'text' },
    link1Txt: { control: 'text' },
    link2Href: { control: 'text' },
    link2Txt: { control: 'text' },
    links: { control: 'boolean' },
    title: { control: 'boolean' },
    titleTxt: { control: 'text' },
  },
};

const bannerElement = createElementFromHTML(banner);

const Template = ({ label, className, disabled, control, ...args }) => {
  Template.args = { label: 'Banner' };
  Template.args = { className: 'button_large' }
  Template.args = { control: 'button_large' }


  // change label
  bannerElement.innerHTML = label;

  // add class on switching stories
  bannerElement.classList.add(className);

  // add Class on switching type
  var newClass = '';
  switch (control) {
    case 'BannerDefault':
      newClass = '';
      break;
    case 'BannerSuccess':
      newClass = '';
      break;
    case 'BannerWarning':
      newClass = '';
      break;
    case 'BannerError':
      newClass = '';
      break;
  }

  //bannerElement.classList.add(newClass);

  // disabled
  if (disabled) {
    bannerElement.disabled = true;
  } else {
    bannerElement.disabled = false;
  }

  // buttons first class is button large class
  // second class (old) will be deleted and new second class added
  if (bannerElement.classList.length > 2) {
    var secondClass = bannerElement.classList[1]
    bannerElement.classList.remove(secondClass);
  }
  return bannerElement;
};

export const BannerDefault = Template.bind({});
BannerDefault.args = {
  label: 'Banner',
  className: 'd',
  control: 'BannerDefault',
  disabled: false
};

export const BannerSuccess = Template.bind({});
BannerSuccess.args = {
  label: 'Button',
  className: 'button_secondary',
  control: 'button_secondary',
};

export const BannerWarning = Template.bind({});
BannerWarning.args = {
  label: 'Button',
  className: 'button_tertiary',
  control: 'button_tertiary',
};

export const BannerError = Template.bind({});
BannerError.args = {
  label: 'Button',
  className: 'button_light',
  control: 'button_light',
};




