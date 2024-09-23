* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #ffe6c7;
}

@font-face {
  font-family: "Halloween";
  src: URL("fonts/ACharmingFont-ee9l.ttf") format("truetype");
}

/*
  Color Palette
  #454545
  #FF6000
  #FFA559
  #FFE6C7
  
  */

body {
  background: linear-gradient(to right, #454545cc, #ff6200c1);
  font-family: Halloween;
  font-size: 36px;
  letter-spacing: 4px;
}

.wrapper {
  margin: 0 auto;
  width: 80%;
}

.title {
  margin: 0 auto;
  text-align: center;
  font-size: 6rem;
}

.card {
  border: 1px solid black;
  display: grid;
  grid-template-columns: auto minmax(min-content, 1fr);
  grid-template-rows: min-content;
  background-color: #ffe6c7;
  margin-bottom: 5px;
}

.card-img {
  width: 200px;
  height: 200px;
}

.card-details {
  padding: 3px 6px;
}

.card-details > p {
  font-size: 4rem;
  color: black;
}

@media (max-width: 656px) {
  .card-details > p {
    font-size: 3rem;
  }
}

@media (max-width: 587px) {
  .card-details > p {
    font-size: 2.5rem;
  }

  .card-img {
    width: 125px;
    height: 125px;
  }
}

@media (max-width: 540px) {
  .card-details > p {
    font-size: 2rem;
  }

  .card-img {
    width: 125px;
    height: 125px;
  }
}

@media (max-width: 522px) {
  .card-details > p {
    font-size: 1.75rem;
  }

  .card-img {
    width: 125px;
    height: 125px;
  }
}
