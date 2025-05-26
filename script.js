

function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((datas) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', datas);
       /// ON ECRIT LE CODE ICI ! 
      let main = document.querySelector('main')
      //.1 Créer une balise main et section est mettre les donnes du json dessus

                // 1.0 On a créé une balise main et dans cette balise on mes une balise section avec des classe 
      
      let sectionMain = document.querySelector('section');
      sectionMain.className = 'box';

                // 1.1 Mettre des element dans la balise section avec le fichier json 
      let h1 = document.querySelector('h1');
      let h2 = document.querySelector('h2');
      let a = document.querySelector('section a.boxbtn');
      
    

      h1.textContent = datas.journal.nomJournal;
      h2.textContent = datas.journal.phraseAccroche;
      a.textContent = datas.journal.texteAppelAction;

                  //Section auteur
      
      let theme = datas.journal.themes[0];  
      let themes =  datas.journal.themes;       
      let sectionTheme = document.createElement('section');
      sectionTheme.className = 'section-theme';
      let divTheme = document.createElement('div');
      divTheme.className = 'div-theme';
      let h2Theme = document.createElement('h2');
      let p2Theme = document.createElement('p');

      h2Theme.textContent = theme.nom;
      p2Theme.textContent = theme.description;


      divTheme.appendChild(h2Theme);
      divTheme.appendChild(p2Theme);
      sectionTheme.appendChild(divTheme);
      main.appendChild(sectionTheme);
      console.log(main);

      themes.forEach(theme => {
      let divTheme = document.createElement('div');
      divTheme.className = 'div-theme';
      let h2Theme = document.createElement('h2');
      let p2Theme = document.createElement('p');

      h2Theme.textContent = theme.nom;
      p2Theme.textContent = theme.description;


      divTheme.appendChild(h2Theme);
      divTheme.appendChild(p2Theme);
      sectionTheme.appendChild(divTheme);
      main.appendChild(sectionTheme);
      console.log(main);

        
      });

      




      





              //section 2
      
      let sectionMain2 = document.createElement('section');
      console.log(sectionMain2);
      let h22 =  document.createElement('h2');
      let p = document.createElement('p');
      let p2 = document.createElement('p');
      let ptheme = document.createElement('p')
      let img = document.createElement('img')
      sectionMain2.className = 'main-2';
      img.className = 'img';



      //inserser les donner dans la section2 

      h22.textContent = datas.journal.articlePrincipal.titre;
      p.textContent = datas.journal.articlePrincipal.description;
      p2.textContent = datas.journal.articlePrincipal.date;
      ptheme.textContent = datas.journal.articlePrincipal.theme;
      img.alt = datas.journal.articlePrincipal.titre;
      img.src = 
      // Tout mettre dans la section 2

      sectionMain2.appendChild(h22)
      sectionMain2.appendChild(p)
      sectionMain2.appendChild(p2)
      sectionMain2.appendChild(ptheme)
      sectionMain2.appendChild(img)
  

     
      main.appendChild(sectionMain2)
      // On passe au articles
      let articles = datas.journal.articles;

      articles.forEach(article => {
          
        let sectionTheme = document.createElement('section');
        sectionTheme.className = 'main-3';
        let hTitre = document.createElement('h2')
        let pDate = document.createElement('p');
        let pTheme = document.createElement('p');
        let artclImg = document.createElement('img');

        // Mettre les donnees dans le html
        hTitre.textContent = article.titre;
       
        pDate.textContent = article.date;
        pTheme.textContent = article.theme;
        artclImg.src = 
        artclImg.alt = article.titre
        sectionTheme.appendChild(hTitre)
        sectionTheme.appendChild(pDate)
        sectionTheme.appendChild(pTheme)
        sectionTheme.appendChild(artclImg)
        main.appendChild(sectionTheme)   


        
      });


                  //On passe au auteurs
      auteurs = datas.journal.auteurs;

    auteurs.forEach(auteur => {
      let sectionAuteur = document.createElement('section');
      let divAuteur = document.createElement('div');
      divAuteur.className = 'div-auteur'
      let prenomAuteur = document.createElement('h2');
      let typeAuteur = document.createElement('p');
      let prestaAuteur = document.createElement('p')


              // On met les donner dans nos variables 

      prenomAuteur.textContent = auteur.prenom;
      typeAuteur.textContent = auteur.typeExperience;
      prestaAuteur.textContent = auteur.presentation;

      // Mettre les variable dans la balise div 

      divAuteur.appendChild(prenomAuteur)
      divAuteur.appendChild(typeAuteur)
      divAuteur.appendChild(prestaAuteur)

      // Mettre la div dans la section 

      sectionAuteur.appendChild(divAuteur)
      main.appendChild(sectionAuteur)
      console.log(sectionAuteur);
      });





       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici


 