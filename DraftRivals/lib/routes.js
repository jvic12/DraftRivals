if (Meteor.isClient){
    Accounts.onLogin(function(){
        FlowRouter.go('current-games');
    });

    Accounts.onLogout(function(){
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId()){
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/',{
    name:"home",
    action(){
        if (Meteor.userId()){
            FlowRouter.go('current-games');
        }
        
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/current-games',{
    name: 'current-games',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Games'});
    }
});

FlowRouter.route('/current-games/:id',{
    name: 'game',
    action(){
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'GameSingle'});
    }
});

FlowRouter.route('/create-a-game',{
   name: 'create-a-game',
    action(){
        BlazeLayout.render('MainLayout', {main: 'CreateAGame'});
    }
});


