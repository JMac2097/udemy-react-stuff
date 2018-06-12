console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        {(app.subtitle) && <p> Subtitle: {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options available'}</p>
        <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
    </div>
);

const user = {
    name: 'Derek',
    age: 19,
    location: 'LA'
};

function getLocation(location) {
    if(location) {
        return <p>location: {location}</p>
    } 
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'unknown'}</h1>
        {(user.age && user.age >= 18) && <p>Age : {user.age}</p>}
        {getLocation(user.location)}
    </div>);
    
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

