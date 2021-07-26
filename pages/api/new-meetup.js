import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function Handler (req, res) {
    if (req.method === 'POST') {
      const data = req.body;
  
      const client = await MongoClient.connect(
        'mongodb+srv://vinoth:u9Nc0DXmIvJIlCSA@cluster0.qzk5u.mongodb.net/meetups?retryWrites=true&w=majority'
      );
      const db = client.db();
  
      const meetupsCollection = db.collection('meetups');
  
      const result = await meetupsCollection.insertOne(data);
  
      console.log(result);
  
      client.close();
  
      res.status(201).json({ message: 'Meetup inserted!' });
    }
  }
  
  export default Handler;