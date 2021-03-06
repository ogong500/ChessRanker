export const Tournaments = new Mongo.Collection('tournaments');

Tournaments.schema = new SimpleSchema({
    name: {
        type: String
    },
    user: {
        type: String
    },
    players: {
        type: [String] //player id
    },
    completed: {
        type: Boolean
    }
});
