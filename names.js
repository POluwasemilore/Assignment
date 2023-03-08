var arr = new Array();
const router = async function (req, res) {
  if (req.url === "/api/my_name" && req.method === "GET") {
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify(arr));
  }

  //  POST: /api/name
  if (req.url === "/api/Add_name"/* && req.method === "POST"*/) {
    try {
      const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      readline.question(
        "please input your name!",
        (new_name) => {
          console.log(`You have successfully added ${new_name} to the array, congratulations!`);
          arr.push(new_name);
          readline.close();
        }
      );

      let container = "Please ensure you add the new name via the terminal";
      res.writeHead(200, { "Content-Type": "application/json" });
      //send response
      res.end(JSON.stringify(container));
    } catch (error) {
      console.log(error);
    }
  }


};

module.exports = router;