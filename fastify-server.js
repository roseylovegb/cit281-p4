// Require the Fastify framework and instantiate it
const fastify = require("fastify")();

let students = [
    {
      id: 1,
      last: "Last1",
      first: "First1",
    },
    {
      id: 2,
      last: "Last2",
      first: "First2",
    },
    {
      id: 3,
      last: "Last3",
      first: "First3",
    }
  ];
  const getStudent = (id) => {
    let num = parseInt(id);
    let response = students.filter(data => data.id = num) 
    return response[0]
  }

  const appendToStudent = (first, last) => {
    const biggestID = students.reduce((prev, current) => {
        if(current.id > prev) {
            return current.id
        }
        return prev

    }, -1)
    
    const newStudent = {id: biggestID +1, first, last}
    students = [...students, newStudent];
    return students;
  };

// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
fastify.get("/cit/student", (request, reply) => {
    reply
      .code(200)
      .header("Content-Type", "application.json; charset=utf-8")
      .send(students);
});
fastify.get("/cit/student/:id", (request, reply) => {
console.log(request.params);
const {id} = request.params

    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(getStudent(id));
});

fastify.post("/cit/student", (request, reply) => {
    console.log(request.body);
    const {first, last} = request.body
    
        reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send(appendToStudent(first, last));
    });

fastify.get("*", (request, reply) => {
    reply
      .code(401)
      .header("Content-Type", "text/html; charset=utf-8")
      .send("<h1>Route not found!</h1>");
});
// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8081;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});