const { createServer } = require('http');
const path = require('path');
const next = require('next');
const express = require('express');
const compression = require('compression');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const lusca = require('lusca');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const sharp = require('sharp');
const crypto = require('crypto');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const moment = require('moment');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;
const imageDB = process.env.imageDB || 'mongodb://admin:password@ds227199.mlab.com:27199/glass';
const mongoURL = process.env.mongoURL || 'mongodb://admin:password@ds227199.mlab.com:27199/glass';

const maxSize = 2000000;

// Storage of images uploaded
const storage = new GridFsStorage({
  url: imageDB,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (errors, buf) => {
        if (errors) {
          return reject(errors);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'images'
        };
        resolve(fileInfo);
      });
    });
  },
  metadata: function(req, file, cb) {
    cb(null, { originalname: file.originalname });
  }
});

const upload = multer({ storage,
  limits: {
    fileSize: maxSize
  },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    }
    cb(null, true);
  }
});

app.prepare().then(_ => {
  const server = express();
  server.use(bodyParser.json({ limit: '15mb' }));
  server.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));
  server.use(compression());
  server.use(expressValidator());
  server.locals.moment = require('moment');
  server.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'do not tell anyone this strong password',
    store: new MongoStore({
      url: mongoURL,
      autoReconnect: true,
      clear_interval: 3600
    })
  }));

  server.get('/sw.js', (req, res) => {
    app.serveStatic(req, res, path.resolve('./static/sw.js'));
  })

  server.post('/upload', upload.single('image'), (req, res) => {
    console.log(req.body);
    console.log(req.file);
    // TODO add file into the elastic search
    res.status(200);
  })

  server.put('/login'  , (req, res) => {
    // if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.status(200);
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

	server.listen(PORT, err => {
		if (err) throw err;

		console.log(`> App running on port ${PORT}`);
	});
});
