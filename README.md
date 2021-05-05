# EVN - Digital Component Library 

## Requirements ##

Node 12.22 or later version 


## Getting Started ## 

Clone project from https://github.com/michihaidacher/tiamatec_wild_evn.git

### Install requirements Storybook ### 

Install all the dependencies using the command npm install

* cd tiamatec_wild_evn/
* npm install
* npm install -g express-generator

### Install requirements App ###

* cd evnApp/
* npm install
* _if you run into an error with npm install, try in command shell: set-executionpolicy remotesigned_

## Development setup ##

### Run Storybook ###
* cd tiamatec_wild_evn/
* npm run storybook
* Storybook will be opened in your browser

### Build Project ###
* cd evnApp/
* npm start
* navigate to http://localhost:3000

### Add Component ###

* navigate to evnApp/components/
* create newComponent.html, newComponent.scss, newComponent.stories.js
