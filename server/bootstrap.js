//mock data
if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Reports.find().count() === 0) {
      var reports = [
        {
          title: 'Overcharging: UVX-123',
          reporter: 'Dawi'
        },
        {
          title: 'Rude Behavior: ABC-987',
          reporter: 'Man'
        }
      ];

      for (var i = 0; i < reports.length; i++) {
        Reports.insert(reports[i]);
      }
    }
  });
}
