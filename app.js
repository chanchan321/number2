const express = require("express");

const PORT = process.env.PORT || 3500;

const router = express.Router();

const app = express();

const fetch = require("node-fetch");

const cron = require('node-cron')

app.get('/',(req, res)=> {

    res.json({
        'hello':'his!'
    });
});


console.log('2'+new Date())

cron.schedule("01 45 18 * * *", function(){
    console.log('2sssssssssssssssssssssssssss')
     setcaw()
    
}, {
   timezone: "Asia/Manila"
 })

const setcaw = async () => {
    const response= await fetch(`https://sms.teamssprogram.com/api/send?key=78bf6e50275bfcaa0851ff26669421ba1bd7baba&phone=+639461991211&sim=2&message=${new Date()}`)
    console.log(response)
}



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));