import React from 'react';

class PortraitAdversaire extends React.Component{

    //Constructeur
    constructor(props){
    super(props);

        //Fixe un état aEteProvoc par défaut
        this.state = {
            aEteProvoc: false
        }
    }

    handleProvoc(){
        this.setState({aEteProvoc: true});
    }


    render(){
        let titre = "Uber Fighter";

        return (
        <div className={this.state.aEteProvoc ? 'border-red' : ''}>
            <ul>
                <img src={"assets/img/"+this.props.adversaire.photo}></img>
                <li>Prénom : {this.props.adversaire.prenom}</li>
                <li>Age : {this.props.adversaire.age}</li>
                <li>Poids : {this.props.adversaire.poids}</li>
                <li>Taille : {this.props.adversaire.taille}</li>
                <li>Description : {this.props.adversaire.description}</li>
                <li>Sports :
                    <ol>
                        {this.props.adversaire.sports.map((sport,index) => {
                            return <li key={index}>{sport}</li>
                        })}
                    </ol>
                </li>
            </ul>
            <button onClick={()=>{this.handleProvoc()}}>Provoquer {this.props.adversaire.prenom}</button>
        </div>
        );
    }
}

export default PortraitAdversaire;