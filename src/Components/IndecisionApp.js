import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handleDeleteOptions = () => {
          this.setState(() => ({ options: [] }));
      }

      handleDeleteOption = (optionToRemove) => {
          this.setState((prevState) => ({
              options: prevState.options.filter((option) => {
                  return optionToRemove !== option;
              })
          }));
      }

      handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

     
         handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
      }

      handleAddOption = (option) => {
          if(!option){
            return 'Enter valid value';
          }else if(this.state.options.indexOf(option) > -1) {
            return 'this option already exists';
          }


        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }    

   
      


    render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';

      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
            <Action 
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}/>
                <div className="widget">
                    <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} 
                    />
                    <AddOption
                    handleAddOption = {this.handleAddOption} 
                    />
                </div>
            </div>
            <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
        </div>
      );
    }
  }