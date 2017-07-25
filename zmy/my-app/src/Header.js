/**
 * Created by admin on 2017/7/21.
 */
import React, {Component} from "react";
import ".Header.css";

class Header extends Component {
    render() {
        return ( <div>
            <p>我在人民广场吃着炸鸡！{this.props.name}</p>
        </div>)
    };
}