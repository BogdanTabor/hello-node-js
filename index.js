// //OPEN SERVER WITH 'HTTP' MODULE
// const host = 'localhost';
// const port = 8000;

// const requireListener = function (req, res) {
//   res.writeHead(200);
//   res.end("Hello node");
// };

// const server = http.createServer(requireListener)
// server.listen(port, host, () => {
//   console.log(`Server is running on http://${host}:${port}`)
// });


// //CODE FOR AWS LAMBDA
// exports.handler = async (event) => {
//   const response = {
//       statusCode: 200,
//       body: JSON.stringify('Hello world'),
//   };
//   return response;
// };


//GENERATE HTML FROM SERVER
var http = require('http');
 
http.createServer(function(request, respone){
  respone.writeHead(200, {'Content-type':'text/plan'});
  response.write('Hello Node JS Server Response');
  response.end( );
 
}).listen(7000);