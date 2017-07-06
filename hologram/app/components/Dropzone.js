import React from 'react';
import PropTypes from 'prop-types';
import Hologram from 'hologram-image-upload';

class DropzoneCom extends React.Component {
    constructor(props) {
        super(props);
        this.onComplete = this.onComplete.bind(this);
    }

    onComplete(result) {
        this.props.onUploaded(result);
    }

    render() {
        return (
            <div>
                <Hologram onComplete={this.onComplete} {... this.props.config} />
                </div>
    );}

    static propTypes = {
        onUploaded: PropTypes.func,
        config: PropTypes.object
    };
}

export default DropzoneCom
