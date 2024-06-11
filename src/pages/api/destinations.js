export default async function handler(req, res) {

  const Airtable = require('airtable');
  const base = new Airtable({ apiKey: process.env.BASE_TOKEN }).base(process.env.BASE_ID);

  const table = base('PlacesToGo');
  const data = await table.select().all()
  const destinations = data.map((destination) => destination.fields)
    
  res.status(200).json(destinations)
}
