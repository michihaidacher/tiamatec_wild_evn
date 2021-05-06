import { withLinks } from '@storybook/addon-links';
import './elevation.scss';
import elevation from './elevation.html';

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

export default {
    title: 'Foundation/Elevation',
    argTypes: {
        type: {
            control: { type: 'select', options: ['dp0', 'dp1', 'dp2', 'dp3', 'dp4', 'dp6', 'dp8', 'dp9', 'dp12', 'dp16', 'dp24'] }
        },
        label: { type: { name: 'string' } },

    },
};

const elevationElement = createElementFromHTML(elevation);

const Template = ({ label, className, control, type, ...args }) => {
    Template.args = { label: 'Elevation Text' };
    Template.args = { className: '' }
    Template.args = { type: 'dp0' }


    // change label
    elevationElement.innerHTML = label;

    // add class on switching stories
    elevationElement.classList.add(className);

    // add Class on switching type
    var newClass = '';
    switch (control) {
        // case 'dp0':
        //     newClass = '';
        //     break;
        case 'dp1':
            newClass = '';
            break;
        case 'dp2':
            newClass = '';
            break;
        case 'dp3':
            newClass = '';
            break;
        case 'dp4':
            newClass = '';
            break;
        case 'dp6':
            newClass = '';
            break;
        case 'dp8':
            newClass = '';
            break;
        case 'dp9':
            newClass = '';
            break;
        case 'dp12':
            newClass = '';
            break;
        case 'dp16':
            newClass = '';
            break;
        case 'dp24':
            newClass = '';
            break;
    }


    // buttons first class is button large class
    // second class (old) will be deleted and new second class added
    if (elevationElement.classList.length > 2) {
        var secondClass = elevationElement.classList[1]
        elevationElement.classList.remove(secondClass);
    }
    return elevationElement;
};

export const dp0 = Template.bind({});
dp0.args = {
    label: 'Elevation Text',
    type: 'dp0',

};

export const dp1 = Template.bind({});
dp1.args = {
    label: 'Elevation Text',
    className: 'dp1',
    type: 'dp1',
};

export const dp2 = Template.bind({});
dp2.args = {
    label: 'Elevation Text',
    className: 'dp2',
    type: 'dp2',
};

export const dp3 = Template.bind({});
dp3.args = {
    label: 'Elevation Text',
    className: 'dp3',
    type: 'dp3',
};

export const dp4 = Template.bind({});
dp4.args = {
    label: 'Elevation Text',
    className: 'dp4',
    type: 'dp4',
};

export const dp6 = Template.bind({});
dp6.args = {
    label: 'Elevation Text',
    className: 'dp6',
    type: 'dp6',
};

export const dp8 = Template.bind({});
dp8.args = {
    label: 'Elevation Text',
    className: 'dp8',
    type: 'dp8',
};

export const dp9 = Template.bind({});
dp9.args = {
    label: 'Elevation Text',
    className: 'dp9',
    type: 'dp9',
};

export const dp12 = Template.bind({});
dp12.args = {
    label: 'Elevation Text',
    className: 'dp12',
    type: 'dp12',
};

export const dp16 = Template.bind({});
dp16.args = {
    label: 'Elevation Text',
    className: 'dp16',
    type: 'dp16',
};

export const dp24 = Template.bind({});
dp24.args = {
    label: 'Elevation Text',
    className: 'dp24',
    type: 'dp24',
};


