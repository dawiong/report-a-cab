Meteor.methods({
  newReport(report) {
    check(report, {
      reported_by: String,
      category_code: String,
      images: Match.Optional([String]),
      plate_number: String,
      operator_name: Match.Optional(String),
      title: Match.Optional(String),
      description: Match.Optional(String)
    });

    report.date_created = new Date();

    var reportId = Reports.insert(report);
    return reportId;
  }
});
