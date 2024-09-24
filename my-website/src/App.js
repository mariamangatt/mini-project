

import React, { useState } from 'react';
import { MongoClient } from 'mongodb';

// MongoDB configuration
const uri = "mongodb+srv://mangattmaria:yoJ2lPuj6opiZ8a9@cluster0.uo4t1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const App = () => {
  // State to manage input value and database value
  const [inputValue, setInputValue] = useState('');
  const [dbValue, setDbValue] = useState('');

  // Function to write to the database
  const writeToDatabase = async () => {
    try {
      await client.connect();
      const database = client.db('mydatabase');
      const collection = database.collection('values');
      await collection.insertOne({ value: inputValue });
      console.log('Value written to database');
    } catch (error) {
      console.error('Error writing to database: ', error);
    } finally {
      await client.close();
    }
  };

  // Function to read from the database
  const readFromDatabase = async () => {
    try {
      await client.connect();
      const database = client.db('mydatabase');
      const collection = database.collection('values');
      const result = await collection.findOne({}, { sort: { _id: -1 } });
      setDbValue(result ? result.value : 'No value found');
      console.log('Value read from database: ', result ? result.value : 'No value found');
    } catch (error) {
      console.error('Error reading from database: ', error);
    } finally {
      await client.close();
    }
  };

  return (
    <div>
      <h1>MongoDB Interaction</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter value"
      />
      <button onClick={writeToDatabase}>Write to Database</button>
      <button onClick={readFromDatabase}>Read from Database</button>
      <p>Database Value: {dbValue}</p>
    </div>
  );
};

export default App;