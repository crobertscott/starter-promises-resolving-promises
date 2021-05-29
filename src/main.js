const { welcome, goodbye, tell } = require("../utils/fortune-teller");

const question = "Will the weather be nice today?"

function getFortune(question) {
  const tellPromise = tell(question)
  .then((fortune) => {
  return [`Your question was: ${question}`, `Your fortune is: ${fortune}`];
  })
  .catch((message) => {
    return `There was an error: ${message}`;
  });
return tellPromise;
 
}


let get = getFortune();
console.log(get);




module.exports = { getFortune };