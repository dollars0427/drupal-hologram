import React from 'react';
import {Panel, FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import {connect} from 'react-redux';

class FileFormCom extends React.Component {
    handleChange(e){
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <FormGroup controlId="formBasicText">
                        <ControlLabel>Uploaded File</ControlLabel>
                        <FormControl
                            type="text"
                            value={JSON.stringify(this.props.files)}
                            onChange={(e)=> this.handleChange}
                            />
                        <FormControl.Feedback />
                    </FormGroup>
                </form>
            </div>
        );}
    }

const mapStateToProps = (state) => {
    return {files: state.files};
}

export default connect(mapStateToProps)(FileFormCom)
