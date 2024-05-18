var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/home', (req,res) => {
  var tst = "This is the test";
  res.send(tst);
});
app.get('/projects', (req,res) => {
  var tst = "This is the Projects endpoint";
  res.send(tst);
});
app.get('/homepage_info', (req,res) => {
  var tst = "This is the Slideshow home Endpoint";
  const images = [
    "https://photos.smugmug.com/Worship-Experience-2024-with-Moses-Bliss-and-Others/i-2SKnDXg/0/FVQpSJz89cB6d2shNqqPHck2XnSckDr5x7qLMPsL8/O/IMG_2088.jpg",
    "https://photos.smugmug.com/Worship-Experience-2024-with-Moses-Bliss-and-Others/i-PpPRChM/0/DV3dxgcggdRNnDd4m52W6RHVQdF9QkhgfQrxrj2z5/O/IMG_1615.jpg",
    "https://photos.smugmug.com/Worship-Experience-2024-with-Moses-Bliss-and-Others/i-GL2TKsp/0/DJzzPTwBPPTMZDjSTZ5LR3f7dRsxfKzWfNjFcX8L9/O/IMG_1160.jpg",
    "https://photos.smugmug.com/Bidemi-Victors-Traditional/i-gtDMTMx/0/FKk3fb46McKn8DT9BG5ZfGTQKnPRMPkd8dMrL8jGx/X3/pic-42-X3.jpg",
    "https://photos.smugmug.com/Bidemi-Victors-Traditional/i-fWnSnz6/0/CZr5fwBkmk9Tw46fVqC5cLKVjx2hGWz7SF8ZmCp5x/X3/pic-21-X3.jpg"
  ];

  const projects = [
    {
      "id": "1",
      "title": "A Night of Worship: Hamilton",
      "description": "Event",
      "imageSrc": "https://photos.smugmug.com/A-night-of-Worship-Healing-Hamilton/i-L3vJJ6q/0/CXjvJNz3szhGmj5GNCxtp9Jd5trSVmD8gsB7WjnH4/X3/IMG_3526-X3.jpg",
      "url": "https://lovejoseph.smugmug.com/"
    },
    {
      "id": "2",
      "title": "Worship Experience: Moses Bliss",
      "description": "Concert",
      "imageSrc": "https://photos.smugmug.com/Worship-Experience-2024-with-Moses-Bliss-and-Others/i-GL2TKsp/0/DJzzPTwBPPTMZDjSTZ5LR3f7dRsxfKzWfNjFcX8L9/O/IMG_1160.jpg",
      "url": "https://lovejoseph.smugmug.com/"
    },
    {
      "id": "3",
      "title": "Project Three",
      "description": "Design",
      "imageSrc": "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "url": "https://lovejoseph.smugmug.com/"
    },
    {
      "id": "4",
      "title": "Project Four",
      "description": "Marketing",
      "imageSrc": "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "url": "https://lovejoseph.smugmug.com/"
    },
    {
      "id": "5",
      "title": "Project Five",
      "description": "Development",
      "imageSrc": "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      "url": "https://lovejoseph.smugmug.com/"
    },
    {
      "id": "6",
      "title": "Project Six",
      "description": "Design & Development",
      "imageSrc": "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      "url": "https://lovejoseph.smugmug.com/"
    }
  ];

  const response_obj = {
    images: images,
    projects: projects
  };
  res.send(response_obj);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// app.get('/', (req,res) => {
//   var tst = "This is the test";
//   res.send(tst);
// });

module.exports = app;
