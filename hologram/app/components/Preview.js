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
                  <div key={file.key} className="image-wrapper" >
                     <div className="image-info">
                        <a href={this.props.uploadUrl + file['name']}>{file.name}</a>
                        <form>
                           {this.props.enableAlt == '1' ?
                              <div>
                                 <label>
                                    Alt Text
                                 </label>
                                 <input
                                    type="text"
                                    name="alt-text"
                                    className="form-text"
                                    value={file.alt}
                                    onChange={(e)=>{
                                       this.props.dispatch(updateAlt(file.key, e.target.value));
                                    }}/>
                              </div>
                           : null}

                           {this.props.enableTitle == '1' ?
                              <div>
                                 <label>
                                    Title Text
                                 </label>
                                 <input
                                    type="text"
                                    name="title-text"
                                    className="form-text"
                                    value={file.title}
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
         files: PropTypes.array,
         uploadUrl: PropTypes.string,
         enableTitle: PropTypes.number,
         enableAlt: PropTypes.number,
         config: PropTypes.object,
         onComplete: PropTypes.func
      };

      static defaultProps = {
         enableTitle: 0,
         enableAlt: 0,
         onComplete: () => {}
      };
   }

   const mapStateToProps = (state) => {
      return {files: state.files};
   }

   export default connect(mapStateToProps)(PreviewCom)
