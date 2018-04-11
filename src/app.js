import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import CardWrap from 'card/CardWrap.js'
import Calculator from 'test/test.js'
import CommentBox from 'comment/commentBox.js'


require('./common/style/main.css');
require('./common/style/comment.css');
require('./common/style/reset.css');

require('../semantic/dist/semantic.css');



class Nav extends Component{
    render(){

        let {changeView} = this.props;
        return (
            <div className="ui menu">
                <div className="item"onClick = {()=>{changeView('test')}}>test</div>
                <div className="item" onClick = {()=>{changeView('home')}}>home</div>
                <div className="item" onClick = {()=>{changeView('list')}}>list</div>
            </div>
        )
    }
}

class Welcome extends Component{
    render(){
        return <h3>welcome to shanghai. react</h3>
    }
}

class Body extends Component{
    render(){
        return (
            <div>
                <img src= {require('./common/img/1200.jpg')} alt="" />
            </div>
        )
    }
}

const element = <div>
    <Welcome />
    <Calculator />
</div>

const rol = <div>
    <CommentBox/>
    <Body/>
</div>

class App extends Component{

    constructor(props){
        super(props)

        this.state = ({
            view: 'home'
        })
        this.changView = this.changView.bind(this);
    }

    getChildContext(){
        return{
            et: 'testapp'
        }
    }

    changView(view){
        this.setState({
            view
        })
    }

    render(){

        let {view} = this.state;
        let viewCompoent = null;

        switch(view){
            case 'home':
                viewCompoent =  rol
                break;
            case 'test':
                viewCompoent =  element
                break;
            case 'list':
                viewCompoent = <CardWrap />
                break;
                 default:
        }


        return(
            <div className="ui container">
                <Nav changeView = {this.changView}/>
                {viewCompoent}
            </div>
        )
    }
}

App.childContextTypes = {
    et: PropTypes.string
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)

if(module.hot){
    module.hot.accept();
}