import { Filter, MongoClient, Sort } from 'mongodb';

export const connectDatabase = async () => {
  return await MongoClient.connect(
    'mongodb+srv://derens:poop1@cluster0.vn6tl.mongodb.net/events?retryWrites=true&w=majority'
  );
};

export const insertDocument = async (client: MongoClient, collection: string, document: Document) => {
  const db = client.db();

  return await db.collection(collection).insertOne(document);
};

export const getDocuments = async (client: MongoClient, collection: string, filter: Filter<Document>, sort: Sort) => {
  const db = client.db();

  return await db.collection(collection).find().sort(sort).toArray();
};