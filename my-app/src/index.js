import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const emelent = <h1>Hello Word!!!</h1>;
ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(emelent, document.getElementById('root2'));

function tick() {
    const emel = (<div><h2>It is {new Date().toLocaleTimeString()}</h2></div>);
    ReactDOM.render(emel, document.getElementById("tick"));
}

setInterval(tick, 1000);

function Welcome(props) {
    return (<h2>欢迎 {props.name}</h2>);
}
const wel_el = <Welcome name="Sara"/>
ReactDOM.render(wel_el,document.getElementById("welcome"));

function NewApp() {
    return(<div>
        <Welcome name="老毛"/>
        <Welcome name="朱明宇"/>
        <Welcome name="李良伟"/>
        <Welcome name="刘于维"/>
        <Welcome name="陆轶秋"/>
    </div>);
}
ReactDOM.render(<NewApp/>,document.getElementById("newapp"))
registerServiceWorker();
