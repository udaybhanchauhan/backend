var con = mysql.createConnection({
    host: "192.168.11.139",
    user: "root",
    password: ""
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });