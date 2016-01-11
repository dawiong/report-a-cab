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

    if(Categories.find().count() == 0){
      var categories = [
        {
          id: 'REFUSED_BOARDING',
          title: 'Refused Boarding'
        },
        {
          id: 'CONTRACTING',
          title: 'Contracting'
        },
        {
          id: 'OVER_CHARGING',
          title: 'Over-charging'
        },
        {
          id: 'BAD_BEHAVIOR',
          title: 'Rude Behavior'
        },
        {
          id: 'SMELLY',
          title: 'Smelly/Dirty'
        },
        {
          id: 'NO_RECEIPT',
          title: 'No Receipt'
        }
      ];

      for (var i = 0; i < categories.length; i++) {
        Categories.insert(categories[i]);
      }
    }
  });
}
