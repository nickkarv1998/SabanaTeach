import React from 'react'

class Video extends React.Component {
    render() {
        return (
            <iframe className="videoInit" src={this.props.url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>)
    }
}

export default Video
