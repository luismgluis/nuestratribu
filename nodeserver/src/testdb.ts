import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:20081601@clusterprimary.7ovm1.mongodb.net/testdb?retryWrites=true&w=majority";
// {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }

const getUsers = (callBack: (data: any) => void) => {
  const client = new MongoClient(uri, {});
  client.connect((err) => {
    const db = client.db("testdb");
    // perform actions on the collection object
    const usersColletion = db.collection("users");
    const result = usersColletion.find({});
    result.toArray((err, res) => {
      console.log(res);
      client.close();
      callBack(res);
    });
  });
};

export default getUsers;
