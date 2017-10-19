import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FaTimesCircle from 'react-icons/lib/fa/times-circle';
import {addFiles, updateAlt, updateTitle, removeFile} from '../actions';
import DropzoneCom from './Dropzone';

class PreviewCom extends React.Component {
   onUploaded(result){
      var files = [];
      result['response'].forEach(function(response){
         const result = response['text'];
         const parsedResult = JSON.parse(result);
         if (parsedResult.status === 'success') {
           files.push(parsedResult.data);
         } else {
           console.error(parsedResult);
           // TODO: need better error messaging
           alert(parsedResult.message);
         }
      });
      if (files.length > 0) {
        this.props.dispatch(addFiles(files));
        this.props.onComplete(files);
      }
   }

   render() {
      const { getPreviewUrl } = this.props;
      return (
         <div>
            {this.props.files.length > 0 ? <div>
               <h2>Uploaded Image:</h2>
               {this.props.files.map((file) =>
                  <div key={file.key} className="image-wrapper" >
                     <div className="image-info">
                        <a className="image-name" href={getPreviewUrl(this.props, file)}>{file.name}</a>
                        <form>
                           {this.props.enableAlt == '1' ?
                              <div className="image-form">
                                 <label>
                                    Alt Text
                                 </label>
                                 <input
                                    type="text"
                                    name="alt-text"
                                    className="form-text"
                                    defaultValue={file.alt}
                                    onChange={(e)=>{
                                       this.props.dispatch(updateAlt(file.key, e.target.value));
                                    }}/>
                              </div>
                           : null}

                           {this.props.enableTitle == '1' ?
                              <div className="image-form">
                                 <label>
                                    Title Text
                                 </label>
                                 <input
                                    type="text"
                                    name="title-text"
                                    className="form-text"
                                    defaultValue={file.title}
                                    onChange={(e)=>{
                                       this.props.dispatch(updateTitle(file.key, e.target.value));
                                    }}/>
                              </div>
                           : null}
                        </form>
                     </div>
                        <div key={file.key} className="preview-image">
                           <FaTimesCircle className="remove-icon" onClick={()=> {
                                 this.props.dispatch(removeFile(file.key))
                              }}/>
                              <img src={getPreviewUrl(this.props, file)}/>
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
         files: PropTypes.array,
         uploadUrl: PropTypes.string,
         enableTitle: PropTypes.number,
         enableAlt: PropTypes.number,
         config: PropTypes.object,
         getPreviewUrl: PropTypes.func,
         onComplete: PropTypes.func
      };

      static defaultProps = {
         enableTitle: 0,
         enableAlt: 0,
         getPreviewUrl: (props, file) => props.uploadUrl + file['name'],
         onComplete: () => {}
      };
   }

   const mapStateToProps = (state) => {
      return {files: state.files};
   }

   export default connect(mapStateToProps)(PreviewCom)
