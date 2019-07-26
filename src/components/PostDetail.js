import React from 'react';
import {Link} from 'react-router-dom';
import JsonPlaceHolder from '../api/jsonPlaceHolder';

class PostDetail extends React.Component{
    state={post: null,userName:''};
    componentWillMount(){
        const postId=this.props.match.params.postId;
        JsonPlaceHolder.get(`/posts/${postId}`).then(postDetail=>{
            this.setState({post:postDetail.data });
        });
           
    }
    componentDidUpdate(){
        if (this.state.post && !this.state.userName) {
            JsonPlaceHolder.get(`/users/${this.state.post.userId}`).then(user=>{
                this.setState({userName:user.data.name });
            });
        }

    }
    PostDetail(){
        const {post,userName}=this.state;
        if(this.state.post){
            return(
                <div key={post.id}>
                    <h1 className="mt-4">{post.title.toUpperCase()}</h1>
                    <p className="lead">
                        by
                    <a href="#"> {userName}</a>
                    </p>
                    <hr />
                    <p className="card-text">{post.body}</p>
                </div>
            );
        }
    }
    render(){
        // console.log(this.props.match.params.postId);
        return(
            <div className="col-lg-12">
                {this.PostDetail()}
            </div>
        );
    };
};

export default PostDetail;