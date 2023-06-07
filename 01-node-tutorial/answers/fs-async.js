const fs = require("fs");

console.log("Start");

fs.writeFile("./temporary/fileB.txt", "First line\n", { flag: "w" }, (err) => {
  if (err) throw err;
  console.log("First line written");

  fs.writeFile(
    "./temporary/fileB.txt",
    "Second line\n",
    { flag: "a" },
    (err) => {
      if (err) throw err;
      console.log("Second line written");

      fs.writeFile(
        "./temporary/fileB.txt",
        "Third line\n",
        { flag: "a" },
        (err) => {
          if (err) throw err;
          console.log("Third line written");
          console.log("All lines written to fileB.txt");
        }
      );
    }
  );
});

console.log("End");
