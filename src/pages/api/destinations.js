export default function handler(req, res) {

  const Airtable = require('airtable');
  const base = new Airtable({ apiKey: process.env.BASE_TOKEN }).base(process.env.BASE_ID);
    base("PlacesToGo").select({
      maxRecords: 3,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
      records.forEach(function(record) {
        if (record){
          const destinationData = {
            city: record.get('City'),
            country: record.get('Country'),
            description: record.get('Description'),
          }
          console.log(destinationData);
        }
      });
    }, function done(err) {
      if (err) { console.error(err); return; }
    });
}
