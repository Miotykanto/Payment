import React, { Component } from 'react';
import "./postAtelier.css"
class postAtelier extends Component {
    constructor () {
      super()
      this.state = {
        value: ''
      }
      this.onChange = this.onChange.bind(this)
    }
  
    onChange (event) {
      this.setState({
        value: event.target.value
      })
    }
  
    render () {
      return (
          <form id="tableau">
              <label>Titre de ton atelier :</label>
      <input
        type="text" id="input1"
        // value={this.state.value}
        // onChange={this.onChange}
      /> <br/>
       <label>Description de contenu :</label>
      <input
        type="text"id="input2"
        // value={this.state.value}
        // onChange={this.onChange}
      /><br/>
      <label>Date :</label>
      <input
        type="date"id="input3"
        // value={this.state.value}
        // onChange={this.onChange}
      /><br/>
      <label>Horaire de  l'atelier :</label>
      <input
        type="time" min="7:00" max="18:00" id="inputhh"
        // value={this.state.value}
        // onChange={this.onChange}
      /><br/>
      <label>Durée :</label>
      <input
        type="number" id="input4"
        // value={this.state.value}
        // onChange={this.onChange}
      /><br/>
      <label>Nombre de place disponible :</label>
      <input
        type="number" min="1" max="400" id="input5"
        // value={this.state.value}
        // onChange={this.onChange}
      /><br/>
      <label>nombre de place reserver :</label>
      <input
        type="number" min="1" max="400" id="input6"
        // value={this.state.value}
        // onChange={this.onChange}
      /><br/>
      <label>Participation :</label>
      <input
        type="text" id="input7"
        // value={this.state.value}
        // onChange={this.onChange}
      />
     <br/>

     
     
      </form>
      )
    }
  }
  export default postAtelier;