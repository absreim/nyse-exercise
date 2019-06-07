import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { uploadFile } from '../store'

class UnconnectedUpload extends Component{
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleFileChange = this.handleFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleFileChange(event){
    this.setState({file: event.target.files[0]})
  }
  handleSubmit(event){
    event.preventDefault()
    const formData = new FormData()
    formData.append('prices', this.state.file)
    this.props.uploadFile(formData)
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="file">Choose file:</label>
          <input name="file "type="file" onChange={this.handleFileChange} />
          <button type="submit">Upload</button>
        </form>
        {
          Object.keys(this.props.results).length > 0 ?
          (
            <Fragment>
              <h2>File upload results</h2>
              <ul>
                {
                  Object.keys(this.props.results).map(resultItemName => {
                    const resultValue = this.props.results[resultItemName]
                    return (
                    <li key={resultItemName}>{
                      `${resultItemName}: ${resultValue}`
                    }</li>
                    )
                  })
                }
              </ul>
            </Fragment>
          ) : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.upload
})

const mapDispatchToProps = dispatch => ({
  uploadFile: formData => dispatch(uploadFile(formData))
})

const Upload = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedUpload)

export default Upload
