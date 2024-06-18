export default async function handler(req, res) {

    const Airtable = require('airtable');
    const base = new Airtable({ apiKey: process.env.BASE_TOKEN }).base(process.env.BASE_ID);

    const { city, country, description, url, date } = req.body;
  
    const table = base('PlacesToGo');
    table.create({
        City: city,
        Country: country,
        Description: description,
        Photos: [
            {
                url: url
            }
        ],
        "Date start": date.startDate,
        "Date end": date.endDate
        }, (err, record) => {
            if(err){
                console.error(err);
                return;
            }
            console.log(record.getId());
        });
    
    res.status(200).json({ city, country, description });
  }
  