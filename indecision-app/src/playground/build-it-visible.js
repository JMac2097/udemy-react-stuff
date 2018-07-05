let visible = false;

const clicked = () => {
    visible = !visible;
    render();
};

const template = document.getElementById('app');

const render = () => {

    const template = (
        <div>
            <p>test</p>
            <button onClick={clicked}>{visible ? 'Hide text' : 'Show text'}</button>
            {visible && <p>{'the hidden text'}</p>}
        </div>
    );

    ReactDOM.render(template, app);
};

render();