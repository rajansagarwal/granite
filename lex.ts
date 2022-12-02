function lex(code) {
  // Initialize a list to store the tokens
  const tokens = [];

  // Define a regular expression to match against the source code
  const regex = /(\d+)|(\+|-|\*|\/|\(|\))/g;

  // Loop through the code, matching the regular expression against each character
  let match;
  while (match = regex.exec(code)) {
    // If the match is a number, add a token with the "number" type
    if (match[1]) {
      tokens.push({
        type: "number",
        value: match[1]
      });
    }
    // If the match is an operator, add a token with the "operator" type
    else if (match[2]) {
      tokens.push({
        type: "operator",
        value: match[2]
      });
    }
  }

  // Return the list of tokens
  return tokens;
}
