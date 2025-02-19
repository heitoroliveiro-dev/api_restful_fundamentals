# API, REST, and RESTFUL
A simple API for managing client information, built with Node.js and Express.js. This project aims to provide a general overview of how RESTful APIs work, serving as a first step before moving on to technologies like Spring Boot and Vue.js.

## Basic Concepts
---

### API
Used for communication between Frontend and Backend, API stands for **Application Programming Interface**. It is essentially a set of routines and standards established by an application so that other applications can use its functionalities.

For example, when developing an app that consumes YouTube videos, you use the **YouTube API** to fetch that data.

In an analogy, in a restaurant, we have the **client** (frontend), who makes requests to the **waiter** (API). The waiter takes these requests to the **kitchen** (server) and returns the orders so that the client can consume what was prepared.

Therefore, an API establishes communication between different services, serving as an intermediary for exchanging information.

### REST
REST is an architectural style for building APIs that follows a set of principles and conventions to ensure scalability, flexibility, and maintainability.

Data transfer is usually done using the **HTTP protocol**. **REST** stands for **Representational State Transfer**, defining best practices for organizing information exchanges.

### RESTFUL
Being **RESTFUL** means following REST rules and standards. There are **six fundamental principles** for an API to be considered RESTFUL:

- **_Client-Server_**: Separation between client (frontend) and server (backend), allowing independent evolution of both.
- **_Stateless_**: Each request must contain all the necessary information for the server to process it, without relying on previous requests.
- **_Cacheable_**: Server responses can be cached to improve performance and reduce server load.
- **_Layered System_**: The architecture can have multiple layers (e.g., load balancers, proxies) without the client needing to be aware.
- **_Code on demand (optional)_**: Ability to send executable code, such as JavaScript scripts, to be processed by the client.
- **_Uniform Interface_**: RESTful APIs must have a uniform interface, with resources identified by **URIs**, standard **HTTP methods**, and well-defined data formats (e.g., JSON).

### Best Practices

- **_Documentation_**: Provide clear and complete API documentation, including **endpoints**, **HTTP methods**, **parameters**, **data formats**, and **usage examples**. Tools like Swagger can help.
- **_Versioning_**: Use API versioning (e.g., `/v1/`, `/v2/`) to prevent breaking changes for existing applications.
- **_Error Handling_**: Implement robust error handling, returning appropriate HTTP codes and clear error messages.
- **_Security_**: Implement authentication and authorization to ensure that only authorized users can access resources.
- **_Testing_**: Create automated tests to ensure functionality and prevent regressions.

### HTTP Methods

- **_GET_**: Retrieves a resource or a list of resources. Example:
  ```bash
  GET /clients       # Lists all clients
  GET /clients/1     # Retrieves the client with ID 1
  ```
- **_POST_**: Creates a new resource.
  ```bash
  POST /clients      # Creates a new client
  ```
- **_PUT_**: Updates an existing resource.
  ```bash
  PUT /clients/1     # Updates the client with ID 1
  ```
- **_DELETE_**: Deletes an existing resource.
  ```bash
  DELETE /clients/1  # Deletes the client with ID 1
  ```

### HTTP Request and Response Structure

- **_Request_**:
    - **HTTP Method**: (GET, POST, PUT, DELETE, etc.)
    - **URL**: (e.g., `/clients`, `/clients/1`)
    - **Headers**: (e.g., `Content-Type: application/json`)
    - **Body (optional)**: (Data sent to the server)
- **_Response_**:
    - **Status Code**: (e.g., `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`)
    - **Headers**: (e.g., `Content-Type: application/json`)
    - **Body (optional)**: (Data returned by the server)

### Response Status Codes

- **1XX**: Informational
- **2XX**: Success
    - `200`: OK
    - `201`: CREATED
    - `204`: No content (used for PUT, POST, DELETE)
- **3XX**: Redirection
- **4XX**: Client Errors
    - `400`: Bad Request
    - `404`: Not Found
- **5XX**: Server Errors
    - `500`: Internal Server Error

## Technologies

*   Node.js
*   Express.js
*   JSON

## API Endpoints

The following API endpoints are available:

| Method  | Endpoint         | Description                                   | Example Usage  |
|---------|-----------------|-----------------------------------------------|---------------|
| **GET**     | `/clients`      | Returns all registered clients              | `GET /clients` |
| **GET**     | `/clients/{id}` | Returns a specific client by ID             | `GET /clients/1` |
| **POST**    | `/clients`      | Creates a new client                        | `POST /clients` (Sending JSON in the body) |
| **PUT**     | `/clients/{id}` | Updates a specific client's data            | `PUT /clients/1` (Sending JSON in the body) |
| **DELETE**  | `/clients/{id}` | Removes a client from the database          | `DELETE /clients/1` |

To test these endpoints, use tools like **Insomnia** or **Postman**, sending the appropriate requests.

## How to Run the Project

To run the API locally, follow these steps:

```bash
# Clone this repository
git clone https://github.com/yourusername/repository-name.git

# Navigate to the project folder
cd repository-name

# Install dependencies
npm install

# Start the server
npm start
```

The API will be available at `http://localhost:3000` (assuming the default Express port is used).

## How to Test the API

After starting the server with `node server.js` in your terminal, use **Insomnia** or **Postman** to create HTTP requests:

1. List clients: `GET localhost:3000/clients`

2. Create a client: `POST localhost:3000/clients` with a JSON body like:
```json
{
    "name": "John Doe",
    "email": "john@example.com"
}
```
3. Update a client: `PUT localhost:3000/clients/1`

4. Delete a client: `DELETE localhost:3000/clients/1`

Now your API is ready for testing! 🚀

---

**This project serves as a first step to solidify knowledge about RESTful APIs. Any feedback or suggestions are welcome!** 🚀
