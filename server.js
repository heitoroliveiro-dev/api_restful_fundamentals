// EXPRESS is a web application framework for Node.js. It is designed for building web applications and APIs.
// It is very flexible and has a lot of features to build web applications and APIs.


// Resourses in API is a data that can be created, updated or deleted. 

// HTTP verbs are used to perform the operations on the resources. Is very important to use the correct HTTP 
// verb for the correct operation.

// Main HTTP verbs:
// GET - Receive the data from the resources
// POST - Send the data to be processed by the resources
// PUT - Update the data in the resources
// DELETE - Delete the data from the resources

// Other HTTP verbs:
// HEAD - Get the header information
// PATCH - Update the data partially
// OPTIONS - Get the information about the communication options
// HEAD - Get the header information
// TRACE - Get the information about the path of the communication
// CONNECT - Establish the connection to the server
// COPY - Copy the data
// LOCK - Lock the data

const express = require('express'); // Import express
const app = express(); // Create an express app
const data = require('./data.json'); // Import the data.json file
const res = require('express/lib/response');


// To use the HTTP verbs in the express, we use the methods of the express app object like:
app.use(express.json()); // Tell the express to use the JSON as the body of the request

// Methods to use the HTTP verbs:

// app.get() - To use the GET verb
app.get("/clients", function(request, response){
    response.json(data);
})

// app.get using a parameter in the route
app.get("/clients/:id", function(request, response){
    const {id} = request.params; // Get the id from the request. "params" is a property of the request object
    const client = data.find(cli => cli.id == id); // Find the client with the id and store in the variable client

    if(!client) return response.status(404).json(); // If the client is not found, return a status 404
    response.json(client); // Return the client in the response

    // When we define the route with a colon '/:id', we are defining a parameter in the route. So we can access 
    // in insomnia the URI https://localhost:3000/clients/1, for example, and the value 1 stored in 
    // the variable id will be returned in the response.
})


// app.post() - To use the POST verb
app.post("/clients", function(request, response){
    const {name, email} = request.body; // Here, we are getting the name and email from the request body defined
    // in the insomnia. "body" is a property of the request object.

    // Them, normally, we would code the logic to save the data in the database. But, in this case, we are just
    // returning the data in the response.

    response.json({name, email}); // Return the name and email in the response

})

app.put("/clients/:id", function(request, response){
    // Now, we gonna see a routine to update the data in the database. We are gonna use the PUT verb to do this.

    const {id} = request.params; // Get the id from the request and use the .params to get the parameter
    const client = data.find(cli => cli.id == id); // Find the client with the id and store in the variable client

    if(!client) return response.status(404).json(); // If the client is not found, return a status 404
    
    const {name,email} = request.body; // Get the name from the request body
    client.name = name; // Update the name of the client
    client.email = email; // Update the email of the client

    response.json(client); // Return the client in the response
})



app.delete("/clients/:id", function(request, response){
    // Now, we gonna see a routine to delete the data in the database. We are gonna use the DELETE verb to do this.

    const {id} = request.params; // Get the id from the request and use the .params to get the parameter
    const clientsFiltered = data.filter(client => client.id != id); 
    // Using the filter method to filter the data and return the data that is different from the id passed
    // in the request. That way, we are deleting the data with the id passed in the request.

    response.json(clientsFiltered); // Return the client in the response

})

// app.listen method is used to bind and listen the connections on the specified host and port.
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});