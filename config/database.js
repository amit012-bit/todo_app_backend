const mongoose = require("mongoose")

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
       // useNewUrlParser: true,
        //useUnifiedTopology: true,
    })
     .then(() => console.log("db ka connection is successfull"))
     .catch ( (error) => {
        console.log("error is there")
        console.error(error.message)
        process.exit(1);
     })
}

module.exports = dbconnect;