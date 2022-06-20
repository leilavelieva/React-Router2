import React, {Component} from "react";
import "./contact.css";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {firstname: '', lastname: '', number: ''} ;
    //this.state.value = {firstname: '', lastname: ''};
    
 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    
  }
  handleChange(event) {
    var value = event.target.value;
    this.setState({ ...this.state, [event.target.name] : value});
  }

    //this.setState({value: event.target.value})
    
    
  

  handleSubmit(event) {
    alert('Відправленні данні:' + this.state.firstname + ' ' + this.state.lastname + ' ' + this.state.number);//state.firstname. +'' + this.state.lastname);
    event.preventDefault();
  }
  render() {
    return (
      
      <form  class='form' onSubmit={this.handleSubmit}>
      <div>Якщо тебе зацікавило, то ти можеш звернутися за номером 380507533747б або написати на пошту
        лейласобачкаджимейлточкаком або
      </div>
   <h1 id='h1'>Залишити заявку нижче</h1>


      <label>
        
        Імя:
        <input class='form_input' type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} placeholder="FirstName?"  />
        
      </label>
      <label>
       Прізвище:
        <input  class='form_input' type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} placeholder="LastName?" />
        
      </label>
      <label>
       Номер телефону
       <input  class='form_input' type="text" name="number" value={this.state.number} onChange={this.handleChange} placeholder="Number?" />
        
      </label>
      <input  class='form_input' id='but' type="submit" value="Відправити" />
    </form>

 //<div>
 //<h2>Є запитання?</h2>
 //<p>Тоді звертайся по номеру +380508888989, або залишить свої дані на пошту @dffffgmail.com</p>
 //<img src="https://thumb.tildacdn.com/tild3435-3734-4332-b266-343365313165/-/format/webp/50A618E7-CFF1-421E-A.jpeg" ></img>
 //</div>
    );
  }
}


export default Contacts;
