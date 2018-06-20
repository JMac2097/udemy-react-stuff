

const buttonValue = (e) => {
    
};

const appRoot = document.getElementById('app');

const render = () => {

    const template = (
        
        <div>
            <h3>Visibility Toggle</h3>
            <button onClick={buttonValue}>Show Details</button>  
            <p>Hello there, this text is usually hidden</p>
        </div>
        
    );
    
    ReactDOM.render(template, appRoot);
};

render();