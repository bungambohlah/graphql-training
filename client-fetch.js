import fetch from "node-fetch";
import util from "util";

const query = {
  query: `{
      movies {
        id
        title
      }
    }`
};

fetch("http://localhost:3000/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
  // Send the query as JSON string
  body: JSON.stringify(query)
})
  .then(r => r.json())
  .then(data => console.log("Results: ", util.inspect(data, false, null)));
