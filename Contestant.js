class Contestant {
    constructor(){
      this.index = null;
      this.distance = 0;
       this.name = null;
    }
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance,
      });
    }
    getContestantInfo(){
      var contestantInfoRef= database.ref('contestant');
      contestantInfoRef.on("value",(data)=>{
      allPlayers = data.val();
      })
    }
    
  }
  