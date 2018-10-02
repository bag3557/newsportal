import React, { Component } from 'react'
import PropTypes from 'prop-types'

class News extends Component {
    render() {
        console.log(this.props.index);
        
        return (
            <p>{this.props.index}</p>
        )
    }
}

News.propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default News
