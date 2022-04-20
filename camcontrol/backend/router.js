const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
//const Nexmo = require('nexmo');
//const socketio = require('socket.io');

// Init Nexmo
/*
const nexmo = new Nexmo({
  apiKey: '7f5f69dd',
  apiSecret: 'ias0TTTzTjWvfBPk'
}, { debug: true });
*/
var path = require('path');
// Init app
const app = express();

// Template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// Public folder setup
console.log(__dirname);
console.log(path);
app.set('views', path.join(__dirname, '../../camcontrol/frontend//templates/frontend'))

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Index route
app.get('/', (req, res) => {
  res.render('index');
});

// Catch form submit
/*
app.post('/', (req, res) => {
  const { number, text } = req.body;

  nexmo.message.sendSms(
    '18885859960', number, text, { type: 'unicode' },
    (error, responseData) => {
      if(error) {
        console.log(error);
      } else {
        const { messages } = responseData;
        const { ['message-id']: id, ['to']: number, ['error-text']: error  } = messages[0];
        console.dir(responseData);
        // Get data from response
        const data = {
          id,
          number,
          error
        };

        // Emit to the client
        io.emit('smsStatus', data);
      }
    }
  );
});
*/
// Define port
const port = 8000;

// Start server
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

// Connect to socket.io
/*
const io = socketio(server);
io.on('connection', (socket) => {
  console.log('Connected');
  io.on('disconnect', () => {
    console.log('Disconnected');
  })
});
*/