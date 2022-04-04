import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'',
         age:"0",
         value:"java"

      }
    }
    handlename=(e)=>
    {
        this.setState(
            {
                name:e.target.value,
            }
        )
    }
    handleage=(e)=>
    {
        this.setState(
            {
        
                age:e.target.value
            }
        )
    }

  handlevalue=(e)=>
  {
      this.setState({
          value:e.target.value
      })
  }

  submitform=(e)=>
  {
      alert('form submitted');
  }
  render() {
    return (<>
    <div>
          <form onClick={this.submitform}>
              <label>Name</label>
              <input type="text" value={this.state.name} onChange={this.handlename}/>
              <br/>
              <label>Age</label>
              <input type="text" value={this.state.age} onChange={this.handleage}/>
              <br/>
              <select value={this.state.value} onChange={this.handlevalue}>
                  <option value="java">java</option>
                  <option value="python">python</option>
                  <option value="c">c</option>
                  <option value=".net">.net</option>

              </select><br/>
              <button type='submit'>Submit</button>
              
          </form>
      </div>
    </>)
  }

}
export default Form
