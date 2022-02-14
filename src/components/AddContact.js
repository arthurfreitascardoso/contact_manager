import React from "react";
import Select from 'react-select'
const options = [

    {
        
        label: 'Work',
        value: 'Work',
    },
    {
        
        label: 'Friends',
        value: 'Friends',
    },
    {
        
        label: 'Family',
        value: 'Family',
    },    
    ]

class AddContact extends React.Component {

    state = {
        name:"",
        email:"",
        phone:" ",
        category:null
    }

    handleChange = category => {
        this.setState({ category });
        
      };

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" ){
            alert("Name is mandatory!!")
            return;
        }
        else if( this.state.phone === ""){
            alert("Phone number are mandatory!!")
            return;
        }
        else if(this.state.email === ""){
            alert("Email is mandatory!!")
            return;
        } 
        
        else if( this.state.category === null ){
            alert("Category is mandatory!!")
            return;
        }
       
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)){
            alert("invalid email!!")
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:"",phone:"",category:null});
        
    }

    render(){
        const { category } = this.state;
        return(
            <div className="ui main">
                <h2>Add Contatc</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Phone</label>
                        <input type="text" name="phone" placeholder="Phone number" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}></input>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>
                    </div>
                    <div className="field">
                    <label>Select a category</label>
                    <Select
          value={category}
          onChange={this.handleChange}
          options={options}
        />
        </div>
                     <button className="ui button blue" style={{ marginTop: "12px"}}>Add</button>
                </form>
               
            </div>
        );
    }
}
export default AddContact;