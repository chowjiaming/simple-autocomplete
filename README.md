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

This project reads and parses the text file upon server initilization and passes it as an array variable to the /autocomplete route. Every time the autocomplete route is called, it filters the array for words that starts with the query. 

The sample front end client calls the endpoint everytime the state of the searchbox changes with any new additions or subtractions to the box. It displays the results below.

If a larger file is served, the file is still read synchronously upon initilization so the server start time will be slightly affected on a one time basis.

If this system needs to perform for a large amount of simultaneous users, the docker-compose workflow can easily be migrated to a kubernetes cluster using Kompose.

One of the goals of this demo is simplicity so no packages other than Express is used. The default filesystem reader is used from Node to read the text file. The frontend client is built with React and a bootstrap package. 

I used the default javascript methods to parse and filter the data. I spent about 4 hours on and off on this demo. If I had more time, I would write some custom methods to improve the autocomplete results. I would also write more error handling and an option to change the wordpool text file.

