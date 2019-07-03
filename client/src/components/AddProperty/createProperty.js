import React, { Component } from "react";
import axios from "axios";
import {message} from 'antd'
export default class createProperty extends Component {
  state = {
    pname: "",
    pimg: "",
    price: "",
    desc: "",
    oname: "",
    onum: "",
    ameni: "",
    size: "",
    location: "",
    rating: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    axios.post("/api/createProperty", this.state)
    .then(res => this.setState({ msg: res.data.msg }))
      .then(() => message.success(`${this.state.msg}`))
      .catch(err=>{
          this.setState({msg:err.err})
          message.error(`${this.state.msg}`)
      })
    this.setState({
      pname: "",
      pimg: "",
      price: "",
      desc: "",
      oname: "",
      onum: "",
      ameni: "",
      size: "",
      location: "",
      rating: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div class='field'>
            <label class='label'>Property Name</label>
            <div class='control'>
              <input
                required
                class='input'
                type='text'
                placeholder='Text input'
                name='pname'
                onChange={this.onChange}
                value={this.state.pname}
              />
            </div>
          </div>

          <div class='field'>
            <label class='label'>Property Image</label>
            <div class='control'>
              <input
                class='input'
                type='text'
                placeholder='image url'
                name='pimg'
                onChange={this.onChange}
                value={this.state.pimg}
              />
            </div>
          </div>
          <div class='field'>
            <label class='label'>Price</label>
            <div class='control'>
              <input
                required
                class='input'
                type='text'
                name='price'
                onChange={this.onChange}
                value={this.state.price}
                placeholder='in Rs (example - 1000000)'
              />
            </div>
          </div>
          <div class='field'>
            <label class='label'>Size</label>
            <div class='control'>
              <input
                required
                class='input'
                type='text'
                name='size'
                onChange={this.onChange}
                value={this.state.size}
                placeholder='1 BHK'
              />
            </div>
          </div>
          <div class='field'>
            <label class='label'>Rating</label>
            <div class='control'>
              <input
                required
                class='input'
                type='number'
                name='rating'
                onChange={this.onChange}
                value={this.state.rating}
                placeholder='3'
              />
            </div>
            <p class='help'>Enter rating from (0-5) values</p>
          </div>
          <div class='field'>
            <label class='label'>Location</label>
            <div class='control'>
              <input
                required
                class='input'
                type='text'
                name='location'
                onChange={this.onChange}
                value={this.state.location}
                placeholder='Greater Noida'
              />
            </div>
          </div>

          <div class='field'>
            <label class='label'>Small Description</label>
            <div class='control'>
              <textarea
                required
                class='textarea'
                placeholder='Textarea'
                name='desc'
                onChange={this.onChange}
                value={this.state.desc}
              />
            </div>
          </div>
          <div class='field'>
            <label class='label'>Owner Name</label>
            <div class='control'>
              <input
                required
                class='input'
                type='text'
                placeholder='Magic Home'
                name='oname'
                onChange={this.onChange}
                value={this.state.oname}
              />
            </div>
          </div>
          <div class='field'>
            <label class='label'>Owner Number</label>
            <div class='control'>
              <input
                required
                class='input'
                type='text'
                name='onum'
                onChange={this.onChange}
                value={this.state.onum}
              />
            </div>
          </div>
          <div class='field'>
            <label class='label'>Amenities</label>
            <div class='control'>
              <textarea
                required
                class='textarea'
                type='text'
                placeholder='AC, Electricity, Fully furnished'
                name='ameni'
                onChange={this.onChange}
                value={this.state.ameni}
              />
            </div>
            <p class='help'>Enter comma separated values</p>
          </div>
          <div class='field is-grouped'>
            <div class='control'>
              <button
                className='button is-link'
                >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
