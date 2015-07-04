var SyncControlView = Backbone.View.extend({
    el:$("#dashboard_container"),

    events:{
        "click #start_sync": 'start_sync'
    },

    start_sync: function(){
        this.model.fetch();
    }
});

$("#sync_start").click(function(e){
    e.preventDefault();
});


