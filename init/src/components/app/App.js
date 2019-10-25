import React from 'react';
import PortraitAdversaire from '../portraitAdversaire/PortraitAdversaire';

class App extends React.Component{
    render(){
        let titre = "Uber Fighter";

        let adversaires = [
            {
                    photo: 'alexandre.jpg',
                    prenom: 'Alexandre',
                    age: 28,
                    poids: 90,
                    taille: '1m80',
                    description: 'J\'aime me battre.',
                    sports: ['MMA', 'Krav Maga', 'Karaté']
            },
            {
                    photo: 'kaaris.jpg',
                    prenom: 'Kaaris',
                    age: 39,
                    poids: 100,
                    taille: '1m80',
                    description: 'Je trempe mes cookies dans tes larmes.',
                    sports: ['MMA', 'Boxe']
            },
            {
                    photo: 'jean-pierre.jpg',
                    prenom: 'Jean Pierre',
                    age: 69,
                    poids: 76,
                    taille: '1m80',
                    description: 'Nouveau chassé-croisé des vacanciers en cette période de Toussaint.',
                    sports: ['Pétanque']
            },
            {
                    photo: 'laurent.jpg',
                    prenom: 'Laurent',
                    age: 56,
                    poids: 73,
                    taille: '1m83',
                    description: 'Salut c\'est Laurent Ruquier.',
                    sports: ['Marche rapide']
            }
        ]

        return (
            <div>
                <h2>{titre}</h2>
                <div className="divider"></div>
                <br/>
                <div className="row">
                    {adversaires.map((adversaire,index)=>{
                        return(<PortraitAdversaire adversaire={adversaire} key={index}/>);
                    })}
                </div>
            </div>
        );
    }
}

export default App;