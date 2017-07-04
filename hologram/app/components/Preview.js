import React from 'react';
import {connect} from 'react-redux';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
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
                  <div className="image-wrapper">
                     <div key={file.key} className="preview-image">
                        <FaTimesCircle className="remove-icon" onClick={()=> {
                              this.props.dispatch(removeFile(file.key))
                           }}/>
                        <img src={this.props.uploadUrl + file['name']}/>
                     </div>
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
