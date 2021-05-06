import './slide-toggle.scss';
import * as toggle from './slide-toggle.html';

export default {
    title: 'Components/Toggle',
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
const toggleHtml = createElementFromHTML(toggle);
// evn html element
const toggleElement = toggleHtml.children[0];
// toggle html element
const realToggle = toggleHtml.children[0].children[0];
// span html element
const spanElement = toggleHtml.children[0].children[0].children[0].children[0];
// arrow svg
const arrowSvgList = toggleHtml.querySelectorAll('svg');
// arrow svg path
const arrowSvgPath = toggleHtml.querySelector('path');

// svg container
const arrowSvgContainerList = toggleHtml.querySelectorAll('evn-icon');


const Template = ({ label, className, disabled, control, adaptability, iconType, ...args }) => {
    Template.args = { label: 'hello123' };
    Template.args = { className: '' }
    Template.args = { control: '' }
    Template.args = { adaptability: 'flexible' }
    Template.args = { iconType: 'arrow-right' }

    // change label
    spanElement.innerHTML = label;



    function changeSvgColorOnDisable(disable) {
        Array.prototype.forEach.call(arrowSvgContainerList, function (el, index, array) {
            if (disable) {
                el.classList.add("svgContainerDisabled");
            } else {
                el.classList.remove("svgContainerDisabled");
            }
        });
    }
    // disable toggle if set
    if (disabled) {
        realToggle.disabled = true;
        changeSvgColorOnDisable(true);
    } else {
        realToggle.disabled = false;
        changeSvgColorOnDisable(false);
    }

    // toggles first class is toggle large class
    // second class (old) will be deleted and new second class added
    var lastClass = realToggle.classList[realToggle.classList.length - 1];

    // remove fixed and flexible class if set
    realToggle.classList.remove("toggle-fixed");
    realToggle.classList.remove("toggle-flexible");
    // add adaptability class
    switch (adaptability) {
        case 'Fixed':
            realToggle.classList.add('toggle-fixed');
            break;

        case 'Flexible':
            realToggle.classList.add('toggle-flexible');
            break;

        default:
            realToggle.classList.add('toggle-fixed');
            break;
    }
    // remove last class ( lastClass is here still the toggle-primay/toggle-secondary...)
    // then add correct class
    realToggle.classList.remove(lastClass);
    realToggle.classList.add(className);


    function rotateArrow(degree) {
        Array.prototype.forEach.call(arrowSvgList, function (el, index, array) {
            el.setAttribute("transform", "rotate(" + degree + ")");
        });
    }
    // rotate arrow
    switch (iconType) {
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

    return toggleElement;
};

export const Primary = Template.bind({});
Primary.args = {
    label: 'Toggle',
    className: 'test',
    control: 'test',
    disabled: false,
    adaptability: ''
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Toggle',
    className: '',
    control: 'button-secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
    label: 'Toggle',
    className: 'button-tertiary',
    control: 'button-tertiary',
};

export const Light = Template.bind({});
Light.args = {
    label: 'Toggle',
    className: 'button-light',
    control: 'button-light',
};

export const MediumGrey = Template.bind({});
MediumGrey.args = {
    label: 'Toggle',
    className: 'button-grey',
    control: 'button-grey',
};

export const LargeFixed = Template.bind({});
LargeFixed.args = {
    label: 'Toggle',
    className: 'button-fixed',
    control: 'button-fixed',
};

export const LargeFlexible = Template.bind({});
LargeFlexible.args = {
    label: 'Toggle',
    className: 'button-flexible',
    control: 'button-flexible',
};



