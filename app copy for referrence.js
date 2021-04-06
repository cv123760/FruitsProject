const mongoose = require("mongoose")

// connect to database. "fruitsDB" on the URL Specifies the name 
// of the database. If it does not exist, one will be created with 
// that name
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser:true})

// create a fruit collection
const fruitSchema = new mongoose.Schema({
  name: String, 
  rating: Number, 
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "apple", 
  rating: 7, 
  review: "prety solid as a fruit"
});


// create a person collection.
const personSchema = new mongoose.Schema({
  name: String, 
  age: Number, 
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "John", 
  age: 27, 
});

// person.save();


// Inset multiple fruits 
const orange = new Fruit({
  name: "orange", 
  rating: 9, 
  review: "really good but sometimes bitter. pestisides maybe?"
});

const banana = new Fruit({
  name: "banana", 
  rating: 7, 
  review: "too sweet at times but good for the most part"
});

const kiwi = new Fruit({
  name: "kiwi", 
  rating: 8, 
  review: "hard to peel and sometimes sour. Realy good if you pick the right one"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   }else{
//     console.log("succesfully saved all the fruits to fruitsDB")
//   }
// });


// get data from database

Fruit.find(function(err, fruits){
  if (err){
    console.log(err);
  } else{
    mongoose.connection.close()

    fruits.forEach(element => {
      console.log( element.name);

    });
  }

});