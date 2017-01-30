
var balle = {

  /*-------------------------- Liste des propriétés ----------------------------

  x
  y
  rayon
  div
  vx
  vy
  dir
  speed

  ----------------------------- Liste des methodes -----------------------------

  changementTrajectoire
  verifCollisionMurs
  initierMouvement
  ******************************************************************************
  ************************** Définition des propriétés *************************
  *****************************************************************************/

  x: 463,
  y: 555,
  rayon: 13,
  couleur: "#e1c048",
  div: window.document.querySelector("#balle"),

  /*---------------------- Propriétés pour le mouvement ----------------------*/

  vx: 0,
  vy: 0,
  dir:2,
  speed:5,

  /*****************************************************************************
  *************************** Définition des méthodes **************************
  *****************************************************************************/

  changementTrajectoire: function(horizontal,effet = 0){
    if (horizontal == true) {
      this.dir = (Math.PI)-this.dir;
    } else {
      this.dir = -(this.dir);
    }
    this.vx = Math.cos(this.dir)*this.speed;
    this.vy = Math.sin(this.dir)*this.speed;
  },

  verifCollisionMurs: function(){
    if (this.x <= 26 || this.x >= 900) {
      this.changementTrajectoire(true);
    }
    if (this.y <= 26) {
      this.changementTrajectoire(false);
    }
    if (this.y >= 580) {
      palet.changementVie(-15);
      this.changementTrajectoire(false);
      var cadreAlt = document.querySelector("#cadreAlt").style;
      cadreAlt.opacity = 1;
      disparitionAlt = window.setInterval(function(){
        if (cadreAlt.opacity > 0) {
          cadreAlt.opacity = cadreAlt.opacity - 0.05;
        } else {
          clearInterval(disparitionAlt);
        }
      }.bind(this),80);
    }
  },

  setup: function(){
    this.div.style.backgroundColor = this.couleur;
    this.changementTrajectoire(false);
    this.bouger = window.setInterval(
      function(){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        this.div.style.left = this.x + "px";
        this.div.style.top = this.y + "px";
        this.verifCollisionMurs();
      }.bind(this),10);
    }
  }
