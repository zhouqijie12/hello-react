import React, {Component} from 'react';

import PropTypes from 'prop-types'

export default class Card extends Component{
    constructor(props){
        super();
        this.state = {
            isHeartOn : false,
            year: props.joined
        }
        this.handClick = this.handClick.bind(this)
        this.joinClick = this.joinClick.bind(this)
    }
    handClick(){
        let {isHeartOn} = this.state;
        isHeartOn = !isHeartOn;
        this.setState({
            isHeartOn
        })
    }
    joinClick(){
        this.setState({
            year: this.state.year +10
        })
    }

    render(){

        let {imgSrc, name, meta, desc, joined, likeNum} = this.props;
        let {et} = this.context;

        let {isHeartOn,year} = this.state;

        let heartClass = isHeartOn? '' :'empty'

        return (
            <div className="ui card">
                <div className="image">
                    <img src={imgSrc} alt=""/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a href="">{meta}</a>
                    </div>
                    <div className="description">{desc}</div>
                </div>
                <div className="extra content">
                    <span className="right floated" onClick={this.joinClick}>{ `${et} in ${year}` }</span>
                    <span>
                        <i onClick={this.handClick} className={`${heartClass} heart icon`}></i>
                        { `${likeNum} like` }
                    </span>
                </div>
            </div>
        )
    }
}

Card.propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.oneOf(['Matt', 'Molly', 'Elyse']),
    name: PropTypes.string.isRequired,
    meta: PropTypes.string,
    desc: PropTypes.string,
    joined: PropTypes.number,
    likeNum: PropTypes.number

}

Card.contextTypes = {
    et: PropTypes.string
}

Card.defaultProps = {
    name:'Elyse'
}

