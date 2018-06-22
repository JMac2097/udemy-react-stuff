let visible = false;

const buttonClicked = () => {
    visible = !visible;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {

    const template = (
        <div>
            <h3>Text Toggle</h3>
            <button onClick={buttonClicked}>{visible ? 'Hide Text' : 'Show Text'}</button>
            {visible && <p>{'Text that has been hidden'}</p>}
        </div>
    );

    ReactDOM.render(template,appRoot);
};

render();