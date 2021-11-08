import React from 'react'
import "../App.scss";
import axios from 'axios';

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          count:9,
          data:{
            users:[]
          }
        }
    }
    AddCard=()=>{
        this.setState({count:this.state.count+3})
        axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=${this.state.count}`)
        .then(response=>{this.setState({data:response.data})})
        .catch(error=>{console.log(error)})
    }
    componentDidMount(){
        axios.get(`https://frontend-test-assignment-api.abz.agency/api/v1/users?count=6`).then(response=>{
        this.setState({data:response.data});})
    }
    render(){
        return(
          <div className="card" id="Users">
            <div className="card_wrapper">
              <div className="card_text">
                <p className="card_title">Our cheerful users</p>
                <p className="card_title2">The best specialists are shown below</p>
              </div>
              <div className="card_block" >
                {this.state.data.users.map((x, index )=>{ return <div key={index}  className="card_grid">
                  <div className="card_grid_info">
                    <div className="card_grid_foto"><img className="Card_grid_UsersFoto" src={x.photo} alt="No"></img></div>
                    <div className="card_grid_name">{x.name} </div>
                    <div className="card_grid_data">
                      <div>{x.position}</div>
                      <div>{x.email}</div>
                      <div>{x.phone}</div>
                    </div>
                  </div>
                  </div>})}
              </div>
              <button onClick={this.AddCard}  className="card_button">Show more</button>
            </div>
          </div>
        )
    }
}
export default Card;