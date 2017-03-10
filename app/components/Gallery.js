import React from 'react';
import {Panel} from 'react-bootstrap';
import DropzoneCom from './Dropzone';

class GalleryCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            files: []
        };
    }

    onUploaded(result){
        this.setState({
            display: true,
            files: result['files']
        });
        this.props.onComplete(result);
    }

    render() {
        return (
            <div>
                <DropzoneCom
                    onUploaded={this.onUploaded.bind(this)}
                    config={this.props.dropzoneConfig}/>
                {this.state.display ? <div>
                    <Panel className="gallery">
                        {this.state.files.map((file) =>
                            <h2>Uploaded Image:</h2>
                            <div key={file.key} className="gallery-image">
                                <img src={file['preview']} className="img-responsive img-thumbnail"></img>
                            </div>
                        )}
                    </Panel>
                </div> : null
            }
        </div>
    );}

    static propTypes = {
        dropzoneConfig: React.PropTypes.object,
        onComplete: React.PropTypes.func
    };

    static defaultProps = {
        onComplete: () => {}
    }
}

export default GalleryCom
