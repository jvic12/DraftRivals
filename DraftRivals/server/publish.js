Meteor.publish('games', function(){
    return Games.find({author: this.userId })
});

Meteor.publish('singleGame', function(id){
    check(id, String);
    return Games.find({_id: id})
});