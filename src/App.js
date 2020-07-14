import React, { Component, Fragment } from 'react';
import Header from './components/header/Header.js';
import PostBody from './components/postBody/PostBody.js';
import CommentsSection from './components/commentsSection/CommentsSection.js';
import { Wrapper } from './App.styled.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    };

    this.data = {};

    this.getData = this.getData.bind(this);
    this.updateCommentsCount = this.updateCommentsCount.bind(this);

  }

  componentWillMount() {
    this.getData();
  }

  getData() {
    fetch('https://gist.githubusercontent.com/mkg0/6a4dca9067ad7a296204e7c9ecd977b0/raw/0b1ec16580ea1e970a73f5c85563c22631be7ad7/unpopularopinion-dataset.json')
    .then(response => response.json())
    .then((resp) => {
      this.data = resp;
      this.setState({ loading: false, commentsCount: resp.comments.length });
    })
    .catch((e) => {
      console.error("Error fetching data");
      console.error(e);
    })
  }

  updateCommentsCount(num) {
    this.setState({ commentsCount: num });
  }

  render() {
    return (
      <Fragment>
        {this.state.loading ? <div>Loading data </div> :
          <Wrapper>
            <Header
              userName={this.data.subreddit_name_prefixed}
              score={this.data.score}
              title={this.data.title}
            />
            <PostBody
              postBody={this.data.selftext}
              numOfComments={this.state.commentsCount}
            />
            <CommentsSection
              comments={this.data.comments}
              updateCommentsCount={this.updateCommentsCount}
            />
          </Wrapper>
      }
    </Fragment>
    );
  }
}

export default App;
