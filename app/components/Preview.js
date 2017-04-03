import React from 'react';
import {Panel} from 'react-bootstrap';
import DropzoneCom from './Dropzone';

class PreviewCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    onUploaded(result){
        this.setState({
            display: true
        });
        //this.props.onComplete(result);
    }

    render() {
        return (
            <div>
                <DropzoneCom
                    onUploaded={this.onUploaded.bind(this)}
                    config={this.props.dropzoneConfig}/>
                {this.state.display ? <div>
                    <h2>Uploaded Image:</h2>
                    <Panel className="preview">
                        {this.state.files.map((file) =>
                            <div key={file.key} className="preview-image">
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

export default PreviewCom
