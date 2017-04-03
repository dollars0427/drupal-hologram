import React from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addFiles} from '../actions';
import DropzoneCom from './Dropzone';

class PreviewCom extends React.Component {
    onUploaded(result){
        this.props.dispatch(addFiles(result['files']));
        //this.props.onComplete(result);
    }

    render() {
        return (
            <div>
                <DropzoneCom
                    onUploaded={this.onUploaded.bind(this)}
                    config={this.props.dropzoneConfig}/>
                {this.props.files.length > 0 ? <div>
                    <h2>Uploaded Image:</h2>
                    <Panel className="preview">
                        {this.props.files.map((file) =>
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
        files: React.PropTypes.array,
        dropzoneConfig: React.PropTypes.object,
        onComplete: React.PropTypes.func
    };

    static defaultProps = {
        onComplete: () => {}
    };
}

const mapStateToProps = (state) => {
  return {files: state.files};
}

export default connect(mapStateToProps)(PreviewCom)
