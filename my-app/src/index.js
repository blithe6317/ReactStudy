/**
 * Created by admin on 2017/9/14.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import PageHeader from './Pageheader'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PageHeader/>,document.getElementById("page_header"));
registerServiceWorker();