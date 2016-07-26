Template.Games.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('games');
    });
    
});

Template.Games.helpers({
   games: ()=> {
       return Games.find({});
   }
}); 