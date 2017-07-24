var deployd = require('deployd');



var options = {
    "Content-Type": "text/html; charset=utf-8",
    port: 2403,
    db: {
        host: 'localhost',
        port: 27017,
        name: 'matrix'
    }
};

var server = deployd(options);

server.listen();
