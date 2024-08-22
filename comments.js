// Create web server
// 1. Import http module
// 2. Create server
// 3. Listen port
// 4. Handle request & response
// 5. Create router
// 6. Create routes
// 7. Create controller
// 8. Create model
// 9. Create view

const http = require('http');
const router = require('./routes/routes');

const server = http.createServer(router);

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});