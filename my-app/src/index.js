import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const emelent = <h1>Hello Word!!!</h1>;
ReactDOM.render(<App/>, document.getElementById('root'));
ReactDOM.render(emelent, document.getElementById('root2'));

function Welcome(props) {
    return (<h2>欢迎 {props.name}</h2>);
}
const wel_el = <Welcome name="Sara"/>
ReactDOM.render(wel_el, document.getElementById("welcome"));

function NewApp() {
    return (<div>
        <Welcome name="老毛"/>
        <Welcome name="朱明宇"/>
        <Welcome name="李良伟"/>
        <Welcome name="刘于维"/>
        <Welcome name="陆轶秋"/>
    </div>);
}
ReactDOM.render(<NewApp/>, document.getElementById("newapp"))
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

//1.
// function tick() {
//     const emel = (<div><h2>It is {new Date().toLocaleTimeString()}</h2></div>);
//     ReactDOM.render(emel, document.getElementById("tick"));
// }

//2.
// function Clock(props) {
//     return(
//         <div>
//             <h2>It is {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }
// function tick() {
//     ReactDOM.render(<Clock date={new Date()}/>,document.getElementById("tick"));
// }

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick()
            , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>hello word!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
// function tick() {
//     ReactDOM.render(<Clock date={new Date()}/>,document.getElementById("tick"));
// }

// setInterval(tick, 1000);

ReactDOM.render(<Clock />, document.getElementById("tick"));

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
ReactDOM.render(<Toggle />, document.getElementById("toggle"));

function UserGreeting(props) {
    return (<h2>Welcome Back!</h2>)
}
function GuestGreeting(props) {
    return (<h2>Please Sign up.</h2>);
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return (<UserGreeting />)
    } else {
        return (<GuestGreeting/>);
    }
}

ReactDOM.render(<Greeting isLoggedIn={true}/>,document.getElementById("greeting"))

function LoginButton(props) {
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
function LogoutButton(props) {
    return(
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn:false}
    }
    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false})
    }
    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if(isLoggedIn){
            button = (<LogoutButton onClick={this.handleLogoutClick}/>)
        }else{
            button=(<LoginButton onClick={this.handleLoginClick}/>)
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );

    }
}
ReactDOM.render(<LoginControl/>,document.getElementById("logincontrol"));

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return(
        <div>
            <h2>Hello!</h2>
            {unreadMessages.length>0&&
            <h3>You have {unreadMessages.length} unread Messages</h3>
            }
        </div>
    )
}
const messages =["一个皮球","一个皮球","一个皮球"];
ReactDOM.render(<Mailbox unreadMessages={messages}/>,document.getElementById("mailbox"));

function WarningBanner(props) {
    if(!props.warn){
        return null;
    }
    return (
        <div className="warning">
            This is Warning!
        </div>
    );
}
class PageWarning extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = {showWarning:true}
    }
    handleToggleClick(){
        this.setState(prevState=>({showWarning:!prevState.showWarning}));
    }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning?"Warn Hide":"Warn Show"}
                </button>
            </div>
        );
    }
}
ReactDOM.render(<PageWarning/>,document.getElementById("pagewarning"));
registerServiceWorker();


