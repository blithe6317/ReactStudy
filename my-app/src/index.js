import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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
