/**
 * Created by admin on 2017/9/14.
 */
import React, {Component} from 'react';
import './css/Header.css';
import icon_facebook from './img/facebook.png'

class PageHeader extends React.Component {

    render() {
        return (
            <div className="header-bar content">
                <Icon data_icon={{icon_url: icon_facebook}}></Icon>
            </div>
        );
    }

}
function Icon(props) {
    const data_icon = {
        icon_url: "",
        no_repeat: true,
        position: 'center',
        width: '30px',
        height: '30px',
        size: 'contain'
    }
    const new_data_icon = Object.assign(data_icon, props.data_icon)
    return (
        <div className="icon" style={{backgroundImage:'url(' +new_data_icon.icon_url+')'}}>

        </div>
    );
}
// class Icon extends React.Component {
//     constructor(props) {
//         super(props);
//         this.setState = {}
//         console.log("props :",props)
//     }
//
//     render() {
//         const data_icon = {
//             icon_url: "",
//             no_repeat: true,
//             position: 'center',
//             width: '30px',
//             height: '30px',
//             size: 'contain'
//         }
//         const cssStyle = "";
//         return (
//             <div className="icon" >
//
//             </div>
//         );
//     }
// }
export default PageHeader;
