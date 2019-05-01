require('dotenv').config();
const server = require('./api/server.js');


server.listen(process.env.PORT || 5000, () => {
    console.log(`\n** server up on port 5000 **\n`)
})
