class toDoList {
  textW = width / 2 + 200;
  textW2 = width / 2 + 200;
  timeTextH = height / 2 - 180;
  textMH = height / 2 + 10;
  textBH = height / 2 + 110;
  textSH1 = height / 2 + 160;
  textSH2 = height / 2 + 160 + 30;
  constructor(list, description1, description2, description3) {
    this.list = list;
    this.description1 = description1;
    this.description2 = description2;
    this.description3 = description3;
  }

  draw() {
    textSize(45);
    text(this.list, this.textW, this.textBH);
    textSize(20);
    text(this.description1, this.textW2, this.textSH1);
    text(this.description2, this.textW2, this.textSH2);
    text(this.description3, this.textW2, this.textSH2 + 30);
  }

  // Li_1 = text('일어나서 몸단장하기', textW, textBH);
  //   textSize(20);
  //   text('공주님은 일찍 일어나서 깔끔한 모습을 유지해야해요.', textW2, textSH1);
  //   text('피곤한 몸을 이끌고 화장실로 가보아요.', textW2, textSH2);
}
