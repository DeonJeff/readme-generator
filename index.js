// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
      {
          type: 'input' ,
          name: 'project tittle'  ,
          message: ' What is the Project Tittle? '
      },
      
      {
        type: 'input' ,
        name: 'description'  ,
        message: ' write a description of your project: '
    },
    {
        type: 'list' ,
        name: 'table of contents'  ,
        choices: [  'installation' , 'usage' , 'license'  , 'contributing'  , 
                     'tests'  ,'questions'  ,  ]
    },
    {
        type: 'input' ,
        name: 'installation'  ,
        message: ' describe the installation: '
    },
    {
        type: 'input' ,
        name:  'usage'  ,
        message: ' What is the project used for? '
    },
    {
        type: 'list' ,
        name: 'license'  ,
        message: ' Chose the appropriate license for this project:' ,
        choices: [ ' ' ]
    },
    {
        type: 'input' ,
        name: 'contributing'  ,
        message: ' who is contributing to this project? '
    },
    {
        type: 'input' ,
        name: 'tests'  ,
        message: ' is there a test included?'
    },
    {
        type: 'input' ,
        name: 'questions'  ,
        message: ' do you have any questions? '
    },
    {
        type: 'input' ,
        name: ' username' ,
        message: ' please enter your GitHub username:'
    },
    {
        type: ' input ' ,
        name: ' email ' ,
        message: ' please enter your email:'
    }
]);

// TODO: Create a function to write README file
fs.writeFile(fileName, JSON.stringify(data, null, '\t'),(err) {
   
    if (err) {
        return console.log(err);
      }

      console.log('Success!');
    });
