const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {  
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing said activity? ', (music) => {
      rl.question("What is your favourite food? ", (food) => {
        rl.question("What is your favourite movie? ", (movie) => {
          rl.question("What is your secret superpower? ", (superpower) => {
            console.log('\n ----- Profile ----- \n');
            console.log(`${name} loves to listen to ${music} while ${activity}, and eating ${food} for every meal possible. ${name}'s favourite movie is ${movie} as it usually played on repeat in their home. Watch out, cause ${name}'s secret superpower is ${superpower}`);
            rl.close();
          })
        });
      });
    });
  });
});


