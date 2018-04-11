import React, {Component} from 'react';

import CommentDate from './CommentDate'
import Comment from './Comment'

export default class CommentBox extends Component{
    render(){
        return(
            <div className="comment-warp">
               <h2>Comments</h2>
               <CommentDate />
               <div className="commen-list">
                    <Comment />
                    <Comment />
               </div>
               <CommentDate />
               <div className="commen-list">
                    <Comment />
                    <Comment />
               </div>
            </div>
        )
    }
}