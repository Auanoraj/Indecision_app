console.log("app is running");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a Computer',
    options: []
};

const onFormSubmit = (e) => {
 e.preventDefault();

const option = e.target.elements.option.value;

if(option){
    app.options.push(option);
    e.target.elements.option.value = '';
  render();
}
};

const removeAll = () => {
    app.options = [];
    render();
}

const decision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    const revenue = app.options[randomNum];
    alert(revenue);
}

const appVote = document.getElementById('app');

const render = () => {
const asset = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options':'No Options'}</p>
        <p>{app.options.length}</p>
        <ol>
           { 
               app.options.map((options) => <li key={options}>{options}</li>)
           }
        </ol>
        <form onSubmit = {onFormSubmit}>
            <input type="text" name="option" />
            <button>Add</button><br/>
            <button disabled={app.options.length === 0} onClick = {decision}>What should i do?</button>
            <button onClick = {removeAll}>Remove</button>
        </form>
    </div>
);
ReactDOM.render(asset, appVote);
};

render();


