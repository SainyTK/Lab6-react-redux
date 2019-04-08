import React from 'react';
import { connect } from 'react-redux';
import githubAction from '../redux/github/action';

const { dispatcher } = githubAction;

class Github extends React.Component {

    state = {
        username: ''
    }

    render() {
        const { githubData } = this.props;
        return (
            <div>
                <input type='text' name='username' onChange={this.handleChange} placeholder='Github username' /> {' '}
                <button onClick={this.handleFetchData}>Get user</button> <br></br>
                {
                    githubData && <div>
                        <div>
                            <img src={githubData.data.avatar_url} alt='avatar' width='400' height='300'/>
                        </div>
                        <div>
                            <h3>{githubData.data.login}</h3>
                        </div>
                        <div>
                            <div>Followings : {githubData.data.following}</div>
                            <div>Followers : {githubData.data.followers}</div>
                            <div>Repos : {githubData.data.public_repos}</div>
                            <div>Gist : {githubData.data.public_gists}</div>
                        </div>
                    </div>
                }
            </div>
        )
    }

    handleChange = (e) => {
        const username = e.target.value;
        this.setState({ username });
    }

    handleFetchData = (e) => {
        const { username } = this.state;
        this.props.fetchData(username);
    }
}

export default connect(state => state.github, dispatcher)(Github);