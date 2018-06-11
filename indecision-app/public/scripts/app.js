'use strict';

console.log('app.js is running');

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'List item 1'
        ),
        React.createElement(
            'li',
            null,
            'List item 2'
        ),
        React.createElement(
            'li',
            null,
            'List item 3'
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// create a new templateTwo var JSX expression
// div
// h1 tag
// -- My name
// p tag -- age: age
//p location: Nottingham
//  Render template2 instead of template
