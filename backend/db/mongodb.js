
// const { MongoClient } = require('mongodb');
const mongooose = require('mongoose');
// mongooose.connect(process.env.MONGODB_URL, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false
// })

const User = mongooose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    Validate(value){
      if(value <1 || value>120){
        throw new Error('age is not valid')
      }

    }
  }
})
const me = new User({name:'Shon',age:33})
me.save().then(()=>{
  console.log(me);
})
// const STRING_CONNECTION = process.env.STRING_CONNECTION

// mongoose.connect(STRING_CONNECTION, {
//     useNewUrlParser: true,
//     useUnifiedTopology:true 

// })
// .then(()=>console.log("MongoDB connected"))
// .catch(err=>console.error("Connection error", err.message))

// module.exports = mongoose.connection
// Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'task-manager';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('tasks');
  // db.collection('tasks').find({})
  // const findResult = await collection.find({_id:'65f2ee4290c274bb8e0909ef'}).toArray();
  // console.log('Inserted documents =>', findResult);
  // collection.updateOne({ _id: new ObjectId("65f2ee4290c274bb8e0909ef") }, { $set: { description: 'Renew netflix membership' } })


  // db.tasks.insertMany([
  //   { description: "Complete project proposal", completed: false },
  //   { description: "Attend meeting with team", completed: true },
  //   { description: "Review code changes", completed: false }
  // ])








  // const insertResult = await db.collection('tasks').insertMany([
  //   {
  //     description: 'Clean the house',
  //     completed: true
  //   },
  //   {
  //     description: 'Renew netflix',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert tasks')
  //   }
  //   console.log(result)
  // })

  // db.getCollection('users').find({}).toArray(function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  // });
  console.log('Found documents =>', insertResult);
  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());