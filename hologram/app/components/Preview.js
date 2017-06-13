import React from 'react';
import {connect} from 'react-redux';
import {addFiles, removeFile} from '../actions';
import DropzoneCom from './Dropzone';

class PreviewCom extends React.Component {
  onUploaded(result){
    var files = [];
    result['response'].forEach(function(response){
      var result = response['text'];
      result = JSON.parse(result);
      files.push(result);
    });
    this.props.dispatch(addFiles(files));
    this.props.onComplete(files);
  }

  render() {
    return (
      <div>
        {this.props.files.length > 0 ? <div>
          <h2>Uploaded Image:</h2>
          {this.props.files.map((file) =>
            <div key={file.key} className="preview-image">
              <img onClick={()=> {
                  this.props.dispatch(removeFile(file.key))}}
                  src={this.props.uploadUrl + file['name']}/>
              </div>
            )}
          </div> :  <DropzoneCom
          onUploaded={this.onUploaded.bind(this)}
          config={this.props.config}/>
      }
    </div>
  );}

  static propTypes = {
    files: React.PropTypes.array,
    uploadUrl: React.PropTypes.string,
    config: React.PropTypes.object,
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
