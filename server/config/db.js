const mongoose = require('mongoose');
// const mongoURI = 'mongodb+srv://crudapp:crudapp@cluster0.iydyt0r.mongodb.net/?retryWrites=true&w=majority';
// const mongoURI = 'mongodb+srv://mz7731346:kGdWOtV7Wto1kkxI@cluster0.r7mtc.mongodb.net/myfirstdatabase?retryWrites=true&w=majority&appName=Cluster0';
const mongoURI = 'mongodb+srv://davidg555555:DgWKIJap9IcebIlB@mycluster.taxyn.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
