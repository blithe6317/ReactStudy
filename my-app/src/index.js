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
ReactDOM.render(<App />, document.getElementById('root'));

function formatDate(date) {
    return date.toLocaleDateString();
}
function Comment(props) {
    return (
        <div className="Comment">
            {/*<div className="UserInfo">
                <img className="avatar"
                src={props.author.avatarUrl}
                alt={props.author.name}
                />
                <Avatar user={props.author}/>
                <div className="AuthorName">{props.author.name}</div>
            </div>*/}
            <Avatar user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}
function Avatar(props) {
    return (
        <div className="UserInfo">
            <img className="avatar"
                 src={props.user.avatarUrl}
                 alt={props.user.name}
            />
            <div className="AuthorName">{props.user.name}</div>
        </div>
    );
}
const comment = {
    date: new Date(),
    text: "我希望明天能够下雨",
    author: {
        name: "你的名字",
        avatarUrl: "http://imgtu.5011.net/uploads/content/20170704/4615571499137593.png"
    }
}
ReactDOM.render(
    <Comment
        author={comment.author}
        date={new Date()}
        text={comment.text}
    />, document.getElementById("comment")
);
registerServiceWorker();
