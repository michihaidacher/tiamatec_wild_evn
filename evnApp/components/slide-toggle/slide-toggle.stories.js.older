import './slide-toggle.scss';
import toggle from './slide-toggle.html';

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

export default {
    title: 'Components/Slide Toggle',
    argTypes: {
        type: {

            control: { type: 'select', options: ['Enabled', 'Disabled', 'WithLabel', 'WithoutLabel'] }
        },
        disabled: { control: 'boolean' },
        label: { type: { name: 'string' } },
        showLabel: { control: 'boolean' },


    },
};

const toggleElement = createElementFromHTML(toggle);

const Template = ({ label, className, disabled, showLabel, ...args }) => {
    Template.args = { label: 'This is the label text.' };
    Template.args = { className: '' }


    // change label
    toggleElement.innerHTML = label;

    // add class on switching stories
    toggleElement.classList.add(className);

    // add Class on switching type
    // var newClass = '';
    // switch (control) {
    //     case 'Primary':
    //         newClass = 'button_primary';
    //         break;
    //     case 'Secondary':
    //         newClass = 'button_secondary';
    //         break;
    //     case 'Tertiary':
    //         newClass = 'button_tertiary';
    //         break;
    //     case 'Light':
    //         newClass = 'button_light';
    //         break;
    //     case 'Medium Grey':
    //         newClass = 'button_grey';
    //         break;
    //     case 'Fixed':
    //         newClass = 'button_fixed';
    //         break;
    //     case 'Flexible':
    //         newClass = 'button_flexible';
    //         break;
    // }

    //toggleElement.classList.add(newClass);

    // disabled
    if (disabled) {
        toggleElement.disabled = true;
    } else {
        toggleElement.disabled = false;
    }

    // buttons first class is button large class
    // second class (old) will be deleted and new second class added
    if (toggleElement.classList.length > 2) {
        var secondClass = toggleElement.classList[1]
        toggleElement.classList.remove(secondClass);
    }
    return toggleElement;
};

export const Enabled = Template.bind({});
Enabled.args = {
    label: 'This is the label text.',
    className: '0',
    disabled: false
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: 'This is the label text.',
    className: '0',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
    label: 'This is the label text.',
    className: '0',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
    label: 'This is the label text.',
    className: '0',
};






