const mongoose= require('mongoose');
module.exports = mongoose.connect(process.env.MONGOOSE,
    {
        useUnifiedTopology: true,
        useNewUrlParser:true,
        dbName:'alam'
    })
    .then(()=>console.log("connected to mongoose"))
    .catch(err=> console.log('Error', err));