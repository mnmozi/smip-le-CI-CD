import { exec } from "child_process";

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  exec(
    "ansible-playbook ansible/main.yml --vault-password-file ansible/vars/vault_pass.txt",
    (error, stdout, stderr) => {
      console.log(stdout);
      console.log(stderr);
      if (error !== null) {
        console.log(`exec error: ${error}`);
      }
    }
  );
});
app.listen(8000);
