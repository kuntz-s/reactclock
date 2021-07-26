import React from "react"
import Display from "./Display"

let day= new Date();
let actual = new Date();
class App extends React.Component{
    constructor(){
        super()
        this.state ={
            hour: day.getHours(),
            minute: day.getMinutes(),
            seconds:day.getSeconds(),
            jour:day.getDay(),
            date: day.getDate(),
            month:day.getMonth(),
            year: day.getFullYear(),
            inputhour:day.getHours(),
            inputminute:day.getMinutes(),
            inputdate:day,

            
        }
       this.handleHourChange= this.handleHourChange.bind(this)
        this.handleMinuteChange= this.handleMinuteChange.bind(this)
        this.handleDateChange= this.handleDateChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
      
    }
    componentDidMount(){
        setInterval(() => {
            day.setSeconds(day.getSeconds() + 1)
            this.setState({
                year: day.getFullYear(),
                month: day.getMonth(),
                jour: day.getDay(),
                hour: day.getHours(),
                minute: day.getMinutes(),
                seconds: day.getSeconds(),
                date: day.getDate(),

            })
        }, 1000)
       
    }
 
    

    //heure

   handleHourChange(event) {
      
    this.setState({inputhour:event.target.value})
    
      
    
    }

    //minute

    handleMinuteChange(event) {
        
        this.setState({inputminute:event.target.value})
    }
 
   // date

   handleDateChange(event) {
        this.setState({inputdate:new Date(event.target.valueAsNumber)})
     
    
    }

  


    handleSubmit(event){
        event.preventDefault();
  
        day.setMinutes(this.state.inputminute)
        day.setHours(this.state.inputhour)
        day.setDate(this.state.inputdate.getDate())
        day.setMonth(this.state.inputdate.getMonth())
        day.setFullYear(this.state.inputdate.getFullYear())
     


    }

    handleClick(e){
        e.preventDefault()
       
       day.setMinutes(actual.getMinutes())
        day.setHours(actual.getHours())
        day.setDate(actual.getDate())
        day.setMonth(actual.getMonth())
        day.setFullYear(actual.getFullYear())
        

    }
    
  
    render(){
        return(
           
                  <Display 
                horlogeJour={this.state.jour} 
                horlogeHeure={this.state.hour}
                horlogeMinute={this.state.minute}
                horlogeSeconde={this.state.seconds}
                horlogeDate={this.state.date}
                horlogeMois={this.state.month}
                horlogeAnnee={this.state.year}
                handleHourChange={this.handleHourChange}
                handleMinuteChange={this.handleMinuteChange}
                handleDateChange={this.handleDateChange}
                handleSubmit={this.handleSubmit}
                handleClick={this.handleClick}

             

                />
        
          
        )
        
    }
}


export default App