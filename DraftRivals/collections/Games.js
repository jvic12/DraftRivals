Games = new Mongo.Collection('games');

Games.allow({
    insert: function(userId, doc){
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
});

Players = new SimpleSchema({
    name: {
        type: String
    }, 
    amount: {
        type: Number
    }
});


GameSchema = new SimpleSchema({
    name: {
       type: String,
       label: "Name"
    } ,
    desc: {
        type: String,
        label: "Description"
    },
    players:{
        type: [Players]
    },
    inGames: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    
    author: {
        type: String,
        label: "Author",
        autoValue: function(){
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function(){
            return new Date()
        },
        autoform: {
            type:"hidden"
        }
    }
});

Meteor.methods({
    toggleGameItem: function(id, currentState){
        Games.update(id,{
            $set: {
                inGames: !currentState
            }
        });
    }
});

Games.attachSchema(GameSchema);