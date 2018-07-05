'use strict';

var visible = false;

var clicked = function clicked() {
    visible = !visible;
    render();
};

var template = document.getElementById('app');

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'test'
        ),
        React.createElement(
            'button',
            { onClick: clicked },
            visible ? 'Hide text' : 'Show text'
        ),
        visible && React.createElement(
            'p',
            null,
            'the hidden text'
        )
    );

    ReactDOM.render(template, app);
};

render();
