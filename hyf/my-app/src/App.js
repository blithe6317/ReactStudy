import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="header">
                <video class="top-back-video" id="topBackVideo" autoPlay="true" loop>
                    <source src="//ossweb-img.qq.com/images/lol/v2/banner/back-v8.webm" type="video/webm"></source>
                        <source src="//ossweb-img.qq.com/images/lol/v2/banner/back-v8.mp4" type="video/mp4"></source>
                </video>
                <div className="logo wobble"></div>
            </div>
    );
    }
    }

    export default App;
