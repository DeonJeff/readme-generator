// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
      {
          type: 'input' .
          name: 'project tittle'  ,
          message: ' What is the Project Tittle'
      },
      
      {
        type: 'input' .
        name: 'description'  ,
        message: ' write a description of your project '
    },
    {
        type: 'list' .
        name: 'table of contents'  ,
        choices: [ '' ]
    },
    {
        type: 'input' .
        name: 'installation'  ,
        message: ' describe the installation'
    },
    {
        type: 'input' .
        name: 'name'  ,
        message: ''
    },
    {
        type: 'input' .
        name: 'name'  ,
        message: ''
    },
    {
        type: 'input' .
        name: 'name'  ,
        message: ''
    },
    {
        type: 'input' .
        name: 'name'  ,
        message: ''
    },
    {
        type: 'input' .
        name: 'name'  ,
        message: ''
    },
  ]) 