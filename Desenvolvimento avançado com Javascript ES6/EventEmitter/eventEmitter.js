const EventEmitter = require("events");

class Users extends EventEmitter {
  userLogged() {
    this.emit("User Logged", data);
  }
}

const user = new Users();

Users.on("User Logged", (data) => {
  console.log(data);
});

Users.userLogged({ user: "Celso Henrique" });
