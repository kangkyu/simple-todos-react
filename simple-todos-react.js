if (Meteor.isClient) {
  // This code is executed on the client only

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
