import React, { Component } from 'react';
import {SearchBarStyle} from '../../Styles/Shared/reusable';
import search from '../../assetts/pink-search.png';


// props from courselist
// courses={courseData} handleSearch={this.handleSearch}

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ""
        }
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.props.handleSearch(this.state.keyword)
    }

    render() {
        return (
            <SearchBarStyle>
                 <input
                    onChange={this.handleOnChange}
                    name="keyword"
                    value={this.state.keyword}
                    placeholder="Course Search..."
                />
                 <img src={search} alt="search" />
            </SearchBarStyle>
        )
    }
}