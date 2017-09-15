/**
 * Created by admin on 2017/9/14.
 */
import React, {Component} from 'react';
import './css/Header.css';


class PageHeader extends React.Component {

    render() {
        return (
            <div className="header-bar content">
                <div className="icon icon-logo"></div>
                <div className=""><input className="search"></input></div>
            </div>
        );
    }

}

export default PageHeader;
