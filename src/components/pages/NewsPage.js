import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchNews } from '../../actions/news'
import News from './News'

class NewsPage extends Component {

    async componentDidMount() {
        this.props.fetchNews()
    }

    render() {  
        const { newsList } = this.props
        return(

            <div className="ui center aligned segment" style={{justifyContent: 'center'}}>
                <h1 className="ui header">
                    News List
                </h1>
                {newsList.news && Object.keys(newsList.news).map(function(value, key){
                    return <News key={key} index={key} value={value} />
                })}
            </div>
        )
    }
}

NewsPage.propTypes = {
    fetchNews: PropTypes.func.isRequired,
    newsList: PropTypes.object,
};

const mapStateToProps = state => ({
    newsList: state.news
})


export default connect(mapStateToProps, { fetchNews })(NewsPage)
