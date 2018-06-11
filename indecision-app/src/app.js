console.log('app.js is running');

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// create a new templateTwo var JSX expression
// div
// h1 tag
// -- My name
// p tag -- age: age
//p location: Nottingham
//  Render template2 instead of template