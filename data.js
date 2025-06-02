function getData() {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((datas) => {
      // Traitez les données comme vous le souhaitez
      console.log("Données récupérées du fichier JSON :", datas);
      /// ON ECRIT LE CODE ICI !

      // Configuration de la page avec 3 sections principales

      //intro
      sectionIntro = document.createElement("section");
      sectionIntro.className = "intro";

      //Dans la section intro on mettra une balise H1
      h1Intro = document.createElement("h1");
      h1Intro.textContent = datas.journal.nomJournal;
      pIntro = document.createElement("p");
      pIntro.textContent = datas.journal.phraseAccroche;
      sectionIntro.appendChild(h1Intro);
      sectionIntro.appendChild(pIntro);
      console.log(sectionIntro);
      document.body.appendChild(sectionIntro);

      //section card ou se deroule les animations

      function creerCard(datas) {
        //section card ou se deroule les animations
        sectionCard = document.createElement("section");
        sectionCard.className = "cards";
        // Dans la section card on rajoute une div avec la classe card et une autre div avec card-enballage
        divCard = document.createElement("div");
        divCard.className = "card";
        // Je rajoute une div avec la classe card-marquee
        divCardMarquee = document.createElement("div");
        divCardMarquee.className = "card-marquee";
        divCard.appendChild(divCardMarquee);
        // et dans cette div je vais rajouter une div avec la classe marquee
        divMarquee = document.createElement("div");
        divMarquee.className = "marquee";
        divCardMarquee.appendChild(divMarquee);
        // et dans cette div marquee je vais rajouter une balise h1
        h1Marquee = document.createElement("h1");
        h1Marquee.textContent = datas.journal.texteAppelAction;
        divMarquee.appendChild(h1Marquee);
        divCardEnballage = document.createElement("div");
        divCardEnballage.className = "card-enballage";

        //Dans la div Card On mettra deux autre div avec la classe card-content et card-enballage
        divCardContenu = document.createElement("div");
        divCardContenu.className = "card-contenu";
        divCardImg = document.createElement("div");
        divCardImg.className = "card-img";
        imgCard = document.createElement("img");

        imgCard.src = "/images/img3.jpg";
        imgCard.alt = datas.journal.articlePrincipal.titre;
        divCardImg.appendChild(imgCard);

        divCardEnballage.appendChild(divCardContenu);
        divCardEnballage.appendChild(divCardImg);
        divCard.appendChild(divCardEnballage);
        console.log(divCard);

        // on ajoute deux div dans le contenue divCardContenu avec la classe card-tittle et card-description
        divCardTittle = document.createElement("div");
        divCardTittle.className = "card-tittle";
        h1CardTittle = document.createElement("h1");
        h1CardTittle.textContent = datas.journal.articlePrincipal.titre;
        divCardDescription = document.createElement("div");
        divCardDescription.className = "card-description";
        pCardDescription = document.createElement("p");
        pCardDescription.textContent =
          datas.journal.articlePrincipal.description;
        pCardDate = document.createElement("p");
        pCardDate.textContent = datas.journal.articlePrincipal.date;
        pCardTheme = document.createElement("p");
        pCardTheme.textContent = datas.journal.articlePrincipal.theme;
        divCardTittle.appendChild(pCardDate);
        divCardTittle.appendChild(pCardTheme);
        divCardContenu.appendChild(divCardTittle);
        divCardContenu.appendChild(divCardDescription);
        divCardTittle.appendChild(h1CardTittle);
        divCardTittle.appendChild(pCardDescription);

        // Mettre la div card dans la section card
        sectionCard.appendChild(divCard);

        // afficher la section card dans le html
        document.body.appendChild(sectionCard);
      }
      creerCard(datas);

      function Card(article, theme) {
        //section card ou se deroule les animations
        sectionCard = document.createElement("section");
        sectionCard.className = "cards";
        // Dans la section card on rajoute une div avec la classe card et une autre div avec card-enballage
        divCard = document.createElement("div");
        divCard.className = "card";
        divCardEnballage = document.createElement("div");
        divCardEnballage.className = "card-enballage";

        //Dans la div Card On mettra deux autre div avec la classe card-content et card-enballage
        divCardContenu = document.createElement("div");
        divCardContenu.className = "card-contenu";
        divCardImg = document.createElement("div");
        divCardImg.className = "card-img";
        imgCard = document.createElement("img");

        imgCard.src = article.image;
        imgCard.alt = article.titre;
        divCardImg.appendChild(imgCard);

        divCardEnballage.appendChild(divCardContenu);
        divCardEnballage.appendChild(divCardImg);
        divCard.appendChild(divCardEnballage);
        console.log(divCard);

        // on ajoute deux div dans le contenue divCardContenu avec la classe card-tittle et card-description
        divCardTittle = document.createElement("div");
        divCardTittle.className = "card-tittle";
        h1CardTittle = document.createElement("h1");
        h1CardTittle.textContent = article.titre;
        divCardDescription = document.createElement("div");
        divCardDescription.className = "card-description";
        pCardDescription = document.createElement("p");
        pCardDescription.textContent = theme.description;

        pCardDate = document.createElement("p");
        pCardDate.textContent = article.date;
        pCardTheme = document.createElement("p");
        pCardTheme.textContent = article.theme;
        divCardTittle.appendChild(pCardDate);
        divCardTittle.appendChild(pCardTheme);
        divCardContenu.appendChild(divCardTittle);
        divCardContenu.appendChild(divCardDescription);
        divCardTittle.appendChild(h1CardTittle);
        divCardTittle.appendChild(pCardDescription);

        // Mettre la div card dans la section card
        sectionCard.appendChild(divCard);

        // afficher la section card dans le html
        document.body.appendChild(sectionCard);
      }

      datas.journal.articles.forEach((article, theme) => {
        Card(article, theme);
      });

      let auteur = datas.journal.auteurs[0];

      //section outro
      sectionOutro = document.createElement("section");

      sectionOutro.className = "outro";
      // je vais creer une div pour les auteurs

      function AvisAuteurs(auteur) {
        sectionOutro = document.createElement("section");

        sectionOutro.className = "outro";
        // je vais creer une div pour les auteurs
        divAuteurs = document.createElement("div");
        divAuteurs.className = "auteurs";
        // je vais creer une balise h2 pour le titre des auteurs
        h2Auteurs = document.createElement("h2");
        h2Auteurs.textContent = auteur.prenom;
        divAuteurs.appendChild(h2Auteurs);
        // une autre balise p pour le type d'experience
        pTypeExperience = document.createElement("p");
        pTypeExperience.textContent = auteur.typeExperience;
        divAuteurs.appendChild(pTypeExperience);

        pAuteurs = document.createElement("p");
        pAuteurs.textContent = auteur.presentation;
        divAuteurs.appendChild(pAuteurs);
        sectionOutro.appendChild(divAuteurs);
        document.body.appendChild(sectionOutro);
        console.log(sectionOutro);
      }

      datas.journal.auteurs.forEach((auteur) => {
        AvisAuteurs(auteur);
      });
      /// FIN DU CODE
    })

    .catch((error) =>
      console.error("Erreur lors de la lecture des données :", error)
    );
}

getData();

///ON écrit les fonctions ici
