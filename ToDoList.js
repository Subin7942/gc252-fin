class ToDoList {
  constructor(text, description1, description2, description3 = null) {
    this.text = text;
    this.description1 = description1;
    this.description2 = description2;
    this.description3 = description3;
  }

  schedule() {
    let textBH = height / 2 + 110;
    let textSH1 = height / 2 + 160;
    let textSH2 = height / 2 + 160 + 30;
    let textW = width / 2 + 200;
    let textW2 = width / 2 + 200;

    if (!this.description3) {
      fill('#ea7eb9ff');
      textSize(45);
      text('"' + this.text + '"', textW, textBH);
      textSize(20);
      text(this.description1, textW2, textSH1);
      text(this.description2, textW2, textSH2);
    } else if (this.description3) {
      fill('#ea7eb9ff');
      textSize(45);
      text('"' + this.text + '"', textW, textBH);
      textSize(20);
      text(this.description1, textW2, textSH1);
      text(this.description2, textW2, textSH2);
      text(this.description3, textW2, textSH2 + 30);
    }
  }
}
