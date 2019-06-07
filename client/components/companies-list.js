import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getCompanies } from '../store'

class UnconnectedCompaniesList extends Component{
  componentDidMount(){
    this.props.getCompanies()
  }
  render(){
    return (
      <div>
        <h1>List of Share Prices by Company</h1>
        {
          this.props.companies.map(company => {
            return (
              <table key={company.id}>
                <thead>
                  <tr>
                    <th colSpan="3">{`(${company.externalId}) ${company.name}`}</th>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <th>Price</th>
                    <th>Comment</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    company.sharePrices.map(sp => {
                      return (
                        <tr key={sp.id}>
                          <td>{sp.date}</td>
                          <td>{sp.price}</td>
                          <td>{sp.comment}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  companies: state.companies
})

const mapDispatchToProps = dispatch => ({
  getCompanies: () => dispatch(getCompanies())
})

const CompaniesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedCompaniesList)

export default CompaniesList
