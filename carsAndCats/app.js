const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
  if (request.url === "/cars") {
    fs.readFile('./views/cars.html', 'utf8', (errors, contents) => {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    });
  }
 else  if(request.url === '/images/56chevy.jpeg'){
        fs.readFile('./images/56chevy.jpeg', function(errors, contents){
        response.writeHead(200, {'Content-type': 'image/jpg'});
        response.write(contents);
        response.end();
    })
  }
 else if(request.url === '/images/65mustang.jpeg'){
    fs.readFile('./images/65mustang.jpeg', function(errors, contents){
    response.writeHead(200, {'Content-type': 'image/jpg'});
    response.write(contents);
    response.end();
})
}
 else if(request.url === '/images/68c10.jpeg'){
  fs.readFile('./images/68c10.jpeg', function(errors, contents){
  response.writeHead(200, {'Content-type': 'image/jpg'});
  response.write(contents);
  response.end();
})
}
  else if (request.url === "/cats") {
    fs.readFile('./views/cats.html', 'utf8', (errors, contents) => {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/images/cat1.jpeg'){
    fs.readFile('./images/cat1.jpeg', function(errors, contents){
    response.writeHead(200, {'Content-type': 'image/jpg'});
    response.write(contents);
    response.end();
})
}
else if(request.url === '/images/cat2.jpeg'){
  fs.readFile('./images/cat2.jpeg', function(errors, contents){
  response.writeHead(200, {'Content-type': 'image/jpg'});
  response.write(contents);
  response.end();
})
}
else if(request.url === '/images/grumpy.jpeg'){
  fs.readFile('./images/grumpy.jpeg', function(errors, contents){
  response.writeHead(200, {'Content-type': 'image/jpg'});
  response.write(contents);
  response.end();
})
}
  else if (request.url === "/cars/new") {
    fs.readFile('./views/addcar.html', 'utf8', (errors, contents) => {
      response.writeHead(200, { 'Content-type': 'text/html' });
      response.write(contents);
      response.end();
    });
  }
  else if(request.url === '/stylesheets/style.css'){
    fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
     response.writeHead(200, {'Content-type': 'text/css'});
     response.write(contents);
     response.end();
    })
  }
  else {
    response.end('File not found!!!');
  }
});
server.listen(6789);
console.log("listening on port 6789");