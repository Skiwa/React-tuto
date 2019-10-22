# React-tuto
Tutoriel React pour le cours d'IHM - MIASHS M2 2019-2020

## Présentation

Le tutoriel consiste en la création d'une application web utilisant React.js comme librairie JavaScript.
L'application utilise également le framework CSS [Materialize](https://materializecss.com/) pour un design propre.

## Prérequis

• IDE web : [Visual Studio Code](https://code.visualstudio.com/), [WebStorm](https://www.jetbrains.com/webstorm/)

• Node.js et npm
```console
# [Facultatif]
# Obtenir directement les dernières versions de Node et npm avec n
npm install n -g
n latest
```
• [Facultatif]
[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)


======


# UberFighter

UberFighter est une plateforme web permettant de participer à des combats de rues à la manière d'un site de rencontre.
L'utilisateur peut provoquer un adversaire, qu'il pourra affronter si la provocation est mutuelle.


Le tutoriel va porter sur l'affichage des adversaires potentiels et du filtrage par rapport à notre profil.



# Initialisation

1. Cloner le projet
```console
    git clone https://github.com/Skiwa/React-tuto
```

2. Installer les dépendances
```console
    cd init
    npm install
```

3. Lancer le projet
```console
    npm start
```


## Créer un composant App qui sera le point d'entrée

- Créer un fichier `App.js` dans un dossier `src/components/app/App.js`;
- Dans `App.js` : 
    - Ajouter les imports de React et ReactDOM
    - Créer une classe `App` qui hérite de `React.Component`
    - Ajouter une méthode `render()` qui retourne ces éléments JSX :
        ```jsx
            <div>
                <h2></h2>
                <div className="divider"></div>
                <br/>
            </div>
        ```
    - Dans la méthode `render()`, créer une variable `titre` qui sera égale à 'Uber Fighter'
    - Insérer le titre dans le `h2`
    - A la fin du fichier, ajouter `export default App` pour rendre le composant accessible
    
## Définir le point d'entrée
- Dans `index.html` définir le point d'entrée avec ```<div id="root"></div>```

## Définir App comme point d'entrée
- Dans `index.js`, créer un composant App à l'emplacement du point d'entrée : (Ne pas oublier d'importer App)
```js
    ReactDOM.render(<App />, document.getElementById('root'));
```


# Créer un composant portraitAdversaire
- Comme App, créer un composant portraitAdversaire
- Dans sa méthode `render()`, lui faire afficher des futures propriétés sous la forme : 
```jsx
    <div>
        <ul>
            <img></img>
            <li>Prénom :</li>
            <li>Age : </li>
            <li>Poids : </li>
            <li>Taille : </li>
            <li>Description : </li>
            <li>Sports : </li>
        </ul>
        <button>Provoquer</button>
    </div>
```

## Afficher un composant portraitAdversaire

- Dans `App.js:render()` :  
    - Ajouter un élément `<PortraitAdversaire/>` après le `<br/>`


## Passer des informations à portraitAdversaire

- Dans `App.js:render()` :  
    - Créer une variable `adversaire` : 
        ```js
            let adversaire = {
                        photo: 'alexandre.jpg',
                        prenom: 'Alexandre',
                        age: 28,
                        poids: 90,
                        taille: '1m80',
                        description: 'J\'aime me battre',
                        sports: ['MMA', 'Krav Maga', 'Karaté']
            }
        ```
    - Passer la variable `adversaire` à l'élément `<PortraitAdversaire/>`. Ex : `<Composant variableDuComposant={variablePassée}/>`

- Dans `PortraitAdversaire.js:render()` :
    - Afficher les informations passées dans les balises `li`. Ex: `<li>{this.props.variableDuComposant}</li>`
    - Afficher les images. La source de l'image est égale à `assets/img/` + `nomDeLaPhoto`
    - Ajouter le prénom de l'adversaire dans le bouton de provocation. Ex `Provoquer Alexandre`


## Boucler sur les sports
    - On ne peut pas boucler automatiquement en React.
    > Pour chaque sport, on va renvoyer un élément JSX

    - Remplacer le contenu des Sports par une liste numérotée : 

    ```jsx
        <li>Sports :
            <ol></ol>
        </li>
    ```

    >Pour chaque sport, on va créer un élément `li` dans la liste
    >Pour faire ça, on utilise la fonction map.
    >En React, chaque élément de map() doit avoir un id, pour faire ça, on lui passe l'index actuel avec l'attribut `key`
    
    - On crée la boucle dans la balise `ol`
    ```jsx
        <ol>
            {this.props.adversaire.sports.map((sport,index) => {
                return <li key={index}>{sport}</li>
            })}
        </ol>
    ```


## Ajouter d'autres combattants
- Dans `App.js:render()` :  
    - Remplacer la variable `adversaire` par :
        ```js
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
        ```

    - Créer un composant `<PortraitAdversaire/>` pour chaque adversaire