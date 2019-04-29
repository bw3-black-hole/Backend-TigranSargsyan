const bcrypt =  require('bcryptjs');
const db = require('../../data/dbConfig.js');

const { authenticate, generateToken } = require('../auth/authenticate.js');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);

  function register(req, res) {
    // implement user registration
    let user = req.body;
    //console.log('1. req.body:',user)
    if(user.username && user.password) {
      const hash = bcrypt.hashSync(user.password, 3)
      user.password = hash
      //console.log('3. hashed', user)
      db('main').insert(user).then(result => {
        //console.log('3. result:',result)
        const [id] = result;
        db('main').where({id}).first().then(userAdded => {
          res.status(200).json(userAdded)
          //console.log('4. userAdded:', userAdded)
        })
        .catch(err => { 
          console.log(err)
          res.status(500).json({message: 'Error accessing DB'})
        })
      })
      .catch(err => {
        res.status(400).json({message: "Error, probably the user already exists"})
        console.log(err);
      })
    } else {
      res.status(422).json({message: "Error, please make sure you've both username & password!"})
    }
  }
  
  function login(req, res) {
    // implement user login
    let { username, password } = req.body;
    db('main').where('username', username).first().then(user => {
      console.log('user object:', user)
      if(user && bcrypt.compareSync(password, user.password)) {
        //console.log('user.password:', user.password, 'password:', password)
        const token = generateToken(user);
        //console.log('useraftertoken:', user, token)
        res.status(200).json({ message: `Login completed for ${user.username}`, token })
      } else {
        res.status(401).json({ message: 'Invalid credentioals!' });
      } 
    }) .catch(err => {
      console.log(err)
      res.status(422).json({message: "Error, probably you've made a mistake"})
    })
  
  }
}
