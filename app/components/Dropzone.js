import React from 'react';
import Hologram from 'hologram-image-upload';

class DropzoneCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
        this.onComplete = this.onComplete.bind(this);
    }

    onComplete(result) {
        this.setState({
            display: false
        })
        this.props.onUploaded(result);
    }

    render() {
        return (
            <div>
                {this.state.display ? <div>
                    <Hologram
                        onComplete={this.onComplete}
                        {... this.props.config} />
                </div> : null
            }
        </div>
    );}

    static propTypes = {
        onUploaded: React.PropTypes.func,
        config: React.PropTypes.object
    };
}

export default DropzoneCom
