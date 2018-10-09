Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route("/", {
    name: 'homeIndex',
    data: function(){
        return {
            message: "Welcome to myJuice"
        }
    }
});

Router.route("/settings",{
    name: 'homeSettings'
});