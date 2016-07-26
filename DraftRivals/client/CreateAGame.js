Template.CreateAGame.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('games');
    });
    
});

Template.CreateAGame.helpers({
   games: ()=> {
       return Games.find({inGames: true});
   }
}); 