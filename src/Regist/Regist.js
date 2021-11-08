import React from 'react'
import "../App.scss";
import axios from 'axios';

class Regist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          token:"",
          position_id:"",
          name:"",
          email:"",
          phone:"",
        }
        this.photo=React.createRef()
    }
    OnPostNameChang=(event)=>{
        this.setState({name: event.target.value})
    }
    OnPostEmailChang=(event)=>{
        this.setState({email:event.target.value})
    }
    OnPostPhoneChang=(event)=>{
        this.setState({phone:event.target.value})
    }
    Post=()=>{
        axios.post("https://frontend-test-assignment-api.abz.agency/api/v1/users",{name:this.state.name,email:this.state.email,phone:this.state.phone,position_id:4, photo:this.photo},{headers:{Token:this.state.token}})
        .then(response=>{console.log(response)});
        this.setState({name:"",email:"",phone:"",})
    }
    componentDidMount(){
        axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/token")
        .then(response=>{this.setState({token:response.data.token})});
        axios.get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
        .then(response=>{this.setState({position_id:response.positions})})
        console.log(this.state.position_id)
    }
    render(){
        return(
        <div className="Regist">
            <div className="Regist_wrapper">
              <div  className="Regist_title" id="Regist">Register to get a work</div>
              <div className="Regist_title2">Your personal data is stored according to the Privacy Policy</div>
              <div className="Regist_input">
                  <form >
                    <input type='text' onChange={this.OnPostNameChang} value={this.state.name} className="input_name" placeholder="name"></input>
                    <input type='text'onChange={this.OnPostEmailChang} value={this.state.email} className="input_email"  placeholder="email"></input>
                    <input type='text'onChange={this.OnPostPhoneChang} value={this.state.phone} className="input_phone"  placeholder="phone"></input>
                    <ul className="Regist_list">Select your position
                        <ol className="Regist_list_points"><input type="radio" name="Select_position" className="Regist_list_points_input" color="aqua"></input>Frontend developer</ol>
                        <ol className="Regist_list_points"><input type="radio" name="Select_position" className="Regist_list_points_input"></input>Backend developer</ol>
                        <ol className="Regist_list_points"><input type="radio" name="Select_position" className="Regist_list_points_input"></input>Designer</ol>
                        <ol className="Regist_list_points"><input type="radio" name="Select_position" className="Regist_list_points_input"></input>QA</ol>
                    </ul>
                    <input type="file" className="input_photo" id="photo" placeholder="photo" ref={this.state.photo} multiple accept="image/*,image/jpeg"></input>
                    <label htmlFor="photo" className="input_photo_label" >
                        <p className="input_photo_label_p"><span className="input_photo_label_p_spam">Upload</span></p>
                    </label>
                    <button className="Regist_button" onClick={this.Post} >Sign up</button>
                    </form>
              </div>
            </div>
        </div>
        )
    }

}
export default Regist;