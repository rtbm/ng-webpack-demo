const launcher = require('browser-launcher');

let app;
let url;

switch (process.env.NODE_ENV) {
  case 'development': {
    app = require('./server/development');
    url = 'http://localhost:8080';
    break;
  }
  case 'production': {
    app = require('./server/production');
    url = 'http://localhost:3000';
    break;
  }
  default: {
    throw new Error('No enviroment specified!');
  }
}

app.listen(3000);

launcher((err, launch) => {
  if (err) return console.error(err);

  const opts = {
    headless: false,
    browser: 'chrome',
  };

  launch(url, opts, err => {
    if (err) return console.error(err);
  });
});
