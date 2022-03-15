import { exec } from "child_process";
import express from "express";
const app = express();

app.get("/", function (req, res) {
  console.log("new request");
  exec(
    "ansible-playbook ansible/main.yml --vault-password-file ansible/vars/vault_pass.txt",
    (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log(`exec error: ${error}`);
        res
          .status(400)
          .json({ message: "Error while executing the code", error: error });
        return;
      }
      res
        .status(200)
        .json({ message: "Command executed successfully!", ouput: stdout });
    }
  );
});
app.listen(7500, () => {
  console.log("Listinign of port 7500");
});
