FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/player', {
    action: function(params, queryParams) {
        BlazeLayout.render('player', {tournamentId: params.tournamentId});
    }
});

FlowRouter.route('/tournament/:tournamentId', {
    action: function(params, queryParams) {
        BlazeLayout.render('tournament', {tournamentId: params.tournamentId});
    }
});

FlowRouter.route('/tournament/edit/:tournamentId', {
    action: function(params, queryParams) {
        BlazeLayout.render('editTournament', {tournamentId: params.tournamentId});
    }
});

FlowRouter.route('/tournament/:tournamentId/:playerName', { // playerName must be a nickname lacking spaces, slashes, and/or weird characters
    action: function(params, queryParams) {
        BlazeLayout.render('player', {tournamentId: params.tournamentId, playerName: params.playerName});
    }
});