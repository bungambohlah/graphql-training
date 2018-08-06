import fetch from "node-fetch";
import util from "util";

const query = {
  query: `query movie($id: Int!){
  movie(id: $id) {
    title
    url
  }
}`,
  variables: { id: 1 }
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
