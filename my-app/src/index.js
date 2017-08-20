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

ReactDOM.render(<Greeting isLoggedIn={true}/>, document.getElementById("greeting"))

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}
function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false}
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = (<LogoutButton onClick={this.handleLogoutClick}/>)
        } else {
            button = (<LoginButton onClick={this.handleLoginClick}/>)
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}/>
                {button}
            </div>
        );

    }
}
ReactDOM.render(<LoginControl/>, document.getElementById("logincontrol"));

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h2>Hello!</h2>
            {unreadMessages.length > 0 &&
            <h3>You have {unreadMessages.length} unread Messages</h3>
            }
        </div>
    )
}
const messages = ["一个皮球", "一个皮球", "一个皮球"];
ReactDOM.render(<Mailbox unreadMessages={messages}/>, document.getElementById("mailbox"));

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            This is Warning!
        </div>
    );
}
class PageWarning extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.state = {showWarning: true}
    }

    handleToggleClick() {
        this.setState(prevState => ({showWarning: !prevState.showWarning}));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? "Warn Hide" : "Warn Show"}
                </button>
            </div>
        );
    }
}
ReactDOM.render(<PageWarning/>, document.getElementById("pagewarning"));

const numbers = [1, 2, 3, 4, 5];
const double_n = numbers.map((number) => number * 2);
console.log("double_n :", double_n);
const ListItem = numbers.map((number) =>
    <li>{number}</li>);
ReactDOM.render(<ul>{ListItem}</ul>, document.getElementById("listitem"));


function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>

        <li key={number.toString()}>
            {number}
        </li>
    );
    console.log("1 ", numbers)
    return (<ul>{listItems}</ul>);
}
const numbers1 = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList numbers={numbers1}/>, document.getElementById("numberlist"));

function ListItem2(props) {
    return <li>{props.value}</li>
}
function NumberList2(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((number) =>
        <listItem key={number.toString()} value={number}></listItem>
    );
    return (<ul>{ListItem2}</ul>);
}
const numbers2 = [1, 2, 3, 4, 5];
ReactDOM.render(<NumberList2 numbers={numbers2}/>, document.getElementById("numberlist2"));

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) =>
                <li key={post.id}>{post.title}</li>)}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (<div>
        {sidebar}
        <hr/>
        {content}
    </div>);
}
const posts = [
    {id: 1, title: "第一次", content: "第一次是什么几把"},
    {id: 2, title: "哟哟哟", content: "不得了了"}
]

ReactDOM.render(<Blog posts={posts}/>, document.getElementById("blog"));

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("这个人的名字叫 ：" + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}
ReactDOM.render(<NameForm/>, document.getElementById("nameform"));

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {value: "laoer"};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert("你选择了" + this.state.value + "陪你睡！");
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>请做出你的选择:</label>
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="老大">老大</option>
                    <option value="老二">老二</option>
                    <option value="小三">小三</option>
                    <option value="李俊">李俊</option>
                    <option value="胡燃烽">胡燃烽</option>
                </select>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

ReactDOM.render(<FlavorForm/>, document.getElementById("flavorform"));

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
        this.handleinputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    那年de承诺：
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleinputChange}/>
                </label>
                <br/>
                <label>
                    无敌的老二：
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChage={this.handleinputChange}
                    />
                </label>
            </form>
        )
    }
}
ReactDOM.render(<Reservation/>, document.getElementById("reservation"));


function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return (<p>这壶水已经烧开了</p>);
    } else {
        return (<p>这壶水还没烧开了呢</p>);
    }
}
class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handelChange = this.handelChange.bind(this);
        this.state = {temperature: ""}
    }

    handelChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>请输入一个温度：</legend>
                <input
                    value={temperature}
                    onChange={this.handelChange}
                />
                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        );
    }
}
ReactDOM.render(<Calculator/>, document.getElementById("calculator"));

//
const scaleNames = {
    c: '摄氏度',
    f: '华氏温度'
}
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handelChange = this.handelChange.bind(this);
        this.state = {temperature: ''};
    }

    handelChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (<fieldset>
            <legend>请输入{scaleNames[scale]}</legend>
            <input value={temperature} onChange={this.handelChange}/>
        </fieldset>);
    }
}
class Calculator2 extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="c"/>
                <TemperatureInput scale="f"/>
            </div>
        )
    }
}
ReactDOM.render(<Calculator2/>, document.getElementById("calculator2"));

function toCelsius(val) {
    console.log("toCelsius :", val);
    console.log("toCelsius out:", (val - 32) * 5 / 9);
    return (val - 32) * 5 / 9;
}
function toFahrenheit(val) {
    console.log("toFahrenheit :", val);
    console.log("toFahrenheit out:", (val / 9 * 5) + 32);
    return val / 9 * 5 + 32;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return "";
    }
    const output = convert(input),
        rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}
class TemperatureInput2 extends React.Component {
    constructor(props) {
        super(props);
        this.handelChange = this.handelChange.bind(this);
    }

    handelChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>这次输入温度类型是：{scaleNames[scale]}</legend>
                <input
                    value={temperature}
                    onChange={this.handelChange}
                />
            </fieldset>
        )
    }
}
class Calculator3 extends React.Component {
    constructor(props) {
        super(props);
        this.handelCelsiusChange = this.handelCelsiusChange.bind(this);
        this.handelFahrenheitChange = this.handelFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handelCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handelFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput2 scale="c"
                                   temperature={celsius}
                                   onTemperatureChange={this.handelCelsiusChange}
                />
                <TemperatureInput2
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handelFahrenheitChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}
ReactDOM.render(<Calculator3/>, document.getElementById("calculator3"))

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>

    );
}
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">{props.title}</h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}
function WelcomeDialog() {
    return (
        <Dialog title="欢迎光临本网站" message="未满8周岁的请自觉离开"/>
    );
}
ReactDOM.render(<WelcomeDialog/>, document.getElementById("welcome-dialog"));

function Contacts() {
    return (
        <div className="Contacts">
            这是一个秘密通道
        </div>
    );
}
function Chat() {
    return (
        <div className="Chat">
            真实的时间
        </div>
    );
}
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}
function AppStare() {
    return (
        <SplitPane
            left={<Contacts/>}
            right={<Chat/>}
        />
    );
}
ReactDOM.render(
    <AppStare/>
    , document.getElementById("app-stare"));
class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handelChange = this.handelChange.bind(this);
        this.handelSignUp = this.handelSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="正规按摩院" message="1.刮痧88，2.按摩99，3.全套800.">
                <input value={this.state.login} onChange={this.handelChange}/>
                <button onClick={this.handelSignUp}>预定</button>
            </Dialog>
        );
    };
    handelChange(e){
        this.setState({login:e.target.value});
    }
    handelSignUp(){
        const message = this.state;
        alert("预定成功，"+message.login+"即将为您服务")
    }
}

ReactDOM.render(
    <SignUpDialog/>
    , document.getElementById("slignup-dialog"));
registerServiceWorker();


