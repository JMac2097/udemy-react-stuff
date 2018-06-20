'use strict';

var buttonValue = function buttonValue(e) {};

var appRoot = document.getElementById('app');

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: buttonValue },
            'Show Details'
        ),
        React.createElement(
            'p',
            null,
            'Hello there, this text is usually hidden'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
