require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.get('/', (req, res)=> {
  res.json({mesagge: 'Hola Desde vps las marias'})
});

const linkedingAuthorization = async () => {
  return await axios.post('https://www.linkedin.com/oauth/v2/accessToken', {
    'response_type': 'code',
    'client_id': process.env.client_id,
    'redirect_uri': 'https://lp-las-marias.vercel.app/',
    'scope': 'w_member_social'
  }, {
    headers: {
      "Content-Type": 'application/x-www-form-urlencoded',
      'grant_type': 'authorization_code',
      "code": location.search.split('&')[0].split('code=')[1],
      'client_id': process.env.client_id,
      'client_secret': process.env.client_secret,
      'redirect_uri': 'https://lp-las-marias.vercel.app/'
    }
  });

}


app.listen(3001, ()=> console.log('Server on port 3001'));

module.exports = app;
