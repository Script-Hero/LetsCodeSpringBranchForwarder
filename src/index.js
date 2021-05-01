import React from 'react';
//import updateSSL from './updateSSL';


class Page extends React.Component {
    render(){
        window.location.href = 'https://letscodespringbranch.com';
        return(
            <div></div>
        )
    }
}

//updateSSL();
const domContainer = document.querySelector('#react-dom');
ReactDOM.render(<Page/>, domContainer);
