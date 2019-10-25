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
        return (
            <div className={"col s4 "+(this.state.aEteProvoc ? 'border-red' : '')}>
            <div className="card medium">
                <div className="card-image">
                    <img src={"assets/img/"+this.props.adversaire.photo} alt="" />
                </div>
                <div className="card-content activator mouse-pointer">
                    <span className="card-title activator">
                    <strong>{this.props.adversaire.prenom}</strong>, {this.props.adversaire.age}
                    </span>
                    <div>
                        <p className="activator">
                            <i className="fas fa-weight-hanging"></i> {this.props.adversaire.poids} kg    
                            <i className="fas fa-arrows-alt-v"></i> {this.props.adversaire.taille}
                        </p>
                    </div>
                    <br />
                    {this.props.adversaire.sports.map((sport, index) => {
                        return <div className="chip" key={index}>{sport}</div>
                    })}
                    <a className="btn-floating halfway-fab waves-effect waves-light red btn-large btn-provoc" onClick={()=>{this.handleProvoc()}}>
                        <img src="assets/img/provoc.svg" alt="" />
                    </a>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        <strong>{this.props.adversaire.prenom}</strong>, {this.props.adversaire.age}
                        <i className="material-icons right">keyboard_arrow_down</i>
                    </span>
                    <br />
                    <div className="row">
                        <div className="col s5">
                            <strong>Poids :</strong> {this.props.adversaire.poids}kg
                        </div>
                        <div className="col s5">
                            <strong>Taille :</strong>  {this.props.adversaire.taille}
                        </div>
                    </div>
                    <div className="divider"></div>
                    <blockquote>
                        <em>{this.props.adversaire.description}</em>
                    </blockquote>
                    <br />
                    <br />
                    <br />
                    <strong>Sports pratiqués :</strong>
                    <div className="row">
                        <div className="col s12 reveal-sports">
                            {this.props.adversaire.sports.map((sport, index) => {
                                return <div className="chip" key={index}>{sport}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default PortraitAdversaire;