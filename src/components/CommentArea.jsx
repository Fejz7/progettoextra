import { Component } from "react";

class CommentArea extends Component {
    state = {
        comments: []
    };

    fetchComment = () => {
        const { book } = this.props; 

        fetch("https://striveschool-api.herokuapp.com/api/comments/" + book.asin, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTRkMjViMjYxNTAwMTk4YTY5NjQiLCJpYXQiOjE3MDY3OTYyNDIsImV4cCI6MTcwODAwNTg0Mn0.jJS2LlW7nrbkZHsxdyzNKV7L1Oc7prVffF3_dYC5yO8"
            }
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Errore");
            }
        })
        .then((comments) => {
            this.setState({ comments });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    componentDidMount() {
        console.log("DidMount");
        this.fetchComment();
    }

    render() {
        const { selected } = this.props.state;
        
        return selected && (
            <div>
                
                {this.state.comments.map(comment => (
                    <div key={comment._id}>{comment.text}</div>
                ))}
            </div>
        );
    }
}

export default CommentArea;
