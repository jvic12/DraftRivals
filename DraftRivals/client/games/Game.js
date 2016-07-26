Template.Game.events({
    'click .toggle-games': function(){
        Meteor.call('toggleGameItem', this._id, this.inGames);
    }
    
});