class Question{
    constructor() {
      this.input=createInput("name");
      this.button=createButton('Play');
      this.greeting=createElement('h2');
      this.question=createElement('h2');

      }
    
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.question.hide();
     }
     display(){
         this.title.html("MyQuiz Game");
         this.title.position(350,0);

         this.question.html("Question:What starts and ends with the letter'E',but only has one letter?");
         this.question.position(150,80);
         this.option1.html("1:Everyone");
         this.option1.position(150,100);
         this.option2.html("2:Envelope");
         this.option2.position(150,120);

         this.input1.position(150,230);

         this.button.mousePressed(()=>{
           this.title.hide();
           this.input1.hide();
           this.button.hide();
           contestant.name=this.input1.value();
           contestantCount+=1;
           contestant.index=contestantCount;
           contestant.update();
           contestant.updateCount(contestantCount);
         })
        }
      }