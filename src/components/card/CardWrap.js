import React, {Component} from 'react';
import Card from 'card/Card.js';

let data = [
    {
        imgSrc: require('img/matthew.png'),
        name: 'Matt',
        meta: 'Friends',
        desc: 'Matthew is an interior designer living in New York.',
        joined: 2013,
        likeNum: 75
    },
    {
        imgSrc: require('img/molly.png'),
        name: 'Molly',
        meta: 'Coworker',
        desc: 'Molly is a personal assistant living in Paris.',
        joined: 2013,
        likeNum: 35
    },
    {
        imgSrc: require('img/elyse.png'),
        name: 'Elyse',
        meta: 'Coworker',
        desc: 'Elyse is a copywriter working in New York.',
        joined: 2014,
        likeNum: 151
    }
];

export default class CardWrap extends Component{

    render(){
        let cards = data.map((el,i)=>{
            return (
                <Card key={i} {...el}/>
            )
        })

        return (
            <div className="ui cards">
                {cards}
            </div>
        )
    }
}
