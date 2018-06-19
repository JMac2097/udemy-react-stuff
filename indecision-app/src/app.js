console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderApp();
};

const removeAll = () => {
    app.options = [];
    renderApp();
};


// create removeAll button above list
// Onclick wipe the array and rerender

const appRoot = document.getElementById('app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
            <button onClick={removeAll}>Remove All</button>
            <ul>
                <li>List item 1</li>
                <li>List item 2</li>
            </ul>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderApp();


// create a new render function that renders the new jsx
// call it right away
// call it after options array added in