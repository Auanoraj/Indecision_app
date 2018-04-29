class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.tv = this.tv.bind(this);
        this.state = {
            visibility: false
        };
    }

    tv() {
        this.setState((prevState)=> {
            return{
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.tv}>{this.state.visibility ? 'hide details' : 'show details'}</button>
            {this.state.visibility && (
                <div>
                <p>heyy hi babes</p>
                </div>
            )}
        </div>
        );
    }
}
ReactDOM.render(<Toggle /> , document.getElementById('app'));

/*let visibility = false;

const tv = () => {
    visibility = !visibility;
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={tv}>{visibility? 'hide details' : 'show details'}</button>
            {visibility && (
                <div>
                <p>heyy hi babes</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
};
render();*/