# Simple Autocomplete

A simple autocomplete project using Node and Express with no database. Project includes a sample front end client that can make autocomplete requests.

## Getting Started

Clone the project and replace the words.txt file inside ~/server/public/ with your own text file containing the word pool you want for your autocomplete server. Please separate all words with spaces and no breaks. 

### Prerequisites

```
You must have docker installed to run this project.
```

### Building and Running Project

To build and run the server with a sample frontend client, run the command:

```
docker-compose up --build
```

Your server will now be serving from localhost:8080 with the sample client serving from the root.
Autocomplete requests will be served at /autocomplete/$partial

### Project Specs and Comments

This project reads txt files 

