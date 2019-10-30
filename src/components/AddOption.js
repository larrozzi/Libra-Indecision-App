import React from 'react';
 

export default class AddOption extends React.Component{
    state= {
        error:undefined
    }
    //constructor not necessary with arrow function handleAddOption
    // constructor(props){
    //     super(props);
    //     this.handleAddOption=this.handleAddOption.bind(this);
    //     // this.state={
    //     //     error:undefined
    //     // }
    // }
        handleAddOption=(e)=>{
        e.preventDefault(); // prevents full page refresh

        const option= e.target.elements.option.value.trim(); 
        const error=this.props.handleAddOption(option);
        this.setState(() => ({error}) );
        // this.setState(() => {
        //     return {error:error}
        // })

        if (!error){
            e.target.elements.option.value= ''; //clear input data works only on class
        }
       
    }

   
    render(){
        return (
            <div>   
                {/*AddOption component here*/}
                {this.state.error&& <p> {this.state.error} </p>}
                <form onSubmit={this.handleAddOption}>  
                    <input type="text" name="option"/>
                    <button > Add Option</button>
                </form>
            </div>
        );
    }
}