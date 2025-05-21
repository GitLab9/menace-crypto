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
      
       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici