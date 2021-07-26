import React from "react"

function Display(props){
    let defaut= new Date()
    let date_defaut= defaut.toISOString().substring(0,10);
   let jour
    switch(props.horlogeJour){
        case 1 : jour ="Lundi" ;break
        case 2 :jour ="Mardi" ; break
        case 3 : jour="Mercredi"; break
        case 4 : jour="Jeudi"; break
        case 5 : jour="Vendredi"; break
        case 6 : jour="Samedi"; break
        case 0 :jour="Dimanche"; break

    }

    let temps ="rien"
    if(props.horlogeHeure>=6 && props.horlogeHeure<12){temps ="MATINEE"}
    else if(props.horlogeHeure>=12 && props.horlogeHeure<18){temps ="APRES-MIDI"}
     else if(props.horlogeHeure>=18 ||( props.horlogeHeure>=0 &&  props.horlogeHeure<6) ){temps ="SOIREE"}
    return(
       
        <div className="page">
            <section className="afficher">
                <p className="horloge">HORLOGE</p><br></br><br></br><br></br><br></br><br></br>
                <p className="jour">{jour}</p>
                <p className="temps">{temps}</p>
                <p className="horaire">
                    <span >{props.horlogeHeure}:</span>
                    <span>{props.horlogeMinute}:</span>
                    <span >{props.horlogeSeconde}</span>
                </p>

                <p className="cal">
                    <span >{props.horlogeDate}:</span>
                    <span >{props.horlogeMois +1}:</span>
                    <span >{props.horlogeAnnee}</span>
                </p>

            </section>
            <section className="modification">
             <p className="modif">MODIFICATION</p><br></br><br></br><br></br><br></br><br></br>
                <form className="tout" onSubmit={props.handleSubmit}>
                   
                  
                     <p > Heure:<input type="number" onChange={props.handleHourChange} min="1" max="24" defaultValue={defaut.getHours()} ></input></p><br></br>
                   <p > Minute:<input type="number" onChange={props.handleMinuteChange} min="1" max="60"  defaultValue={defaut.getMinutes()}></input></p><br></br>
                   <p > Date:<input type= "date" onChange={props.handleDateChange} defaultValue={date_defaut} ></input></p><br></br>
                   <p><button type="submit" className="modifier" >Modifier</button></p>
                   
                 

                </form><br></br><br></br><br></br>
                <div className="init">
                    <p>Cliquer ici pour reinitialiser</p><br></br>
                    <button onClick={props.handleClick} className="reinitialiser">Reinitialiser</button>
                    
                </div>

               
            </section>
           
        </div>
    )
}

export default Display
