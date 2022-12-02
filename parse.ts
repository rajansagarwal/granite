function parse(tokens) {
  // Define a function to match an expression in the form "number operator number"
  function matchExpression() {
    // Match a number
    const num1 = matchNumber();
    if (!num1) return null;

    // Match an operator
    const op = matchOperator();
    if (!op) return null;

    // Match another number
    const num2 = matchNumber();
    if (!num2) return null;

    // Return the expression as an array
    return [num1, op, num2];
  }

  // Define a function to match a number token
  function matchNumber() {
    // Check if the current token is a number
    if (tokens[i].type === "number") {
      // Return the number and advance the token index
      return tokens[i++].value;
    }
    // If the current token is not a number, return null
    else {
      return null;
    }
  }

  // Define a function to match an operator token
  function matchOperator() {
    // Check if the current token is an operator
    if (tokens[i].type === "operator") {
      // Return the operator and advance the token index
      return tokens[i++].value;
    }
    // If the current token is not an operator, return null
    else {
      return null;
    }
  }

  // Define a function to match a "for" loop
  function matchForLoop() {
    // Check if the current token is the "for" keyword
    if (tokens[i].type === "keyword" && tokens[i].value === "for") {
      // Advance the token index
      i++;

      // Match the loop variable
      const varName = matchVariable();
      if (!varName) return null;

      // Match the "in" keyword
      const inToken = matchKeyword("in");
      if (!inToken) return null;

      // Match the start and end values
      const startValue = matchNumber();
      if (!startValue) return null;
      const endValue = matchNumber();
      if (!endValue) return null;

      // Initialize an array to store the loop body
      const body = [];

      // Match the "{" character
      const openBrace = matchPunctuation("{");
      if (!openBrace) return null;

      // Loop until the matching "}" is found
      let depth = 0;
      while (i < tokens.length) {
        // If a "{" is encountered, increase the depth
        if (tokens[i].value === "{") {
          depth++;
        }
        // If a "}" is encountered, decrease the depth
        else if (tokens[i].value === "}") {
          depth--;

          // If the depth is 0, we have found the matching "}"
          if (depth === 0) {
            // Advance the token index and break out of the loop
            i++;
            break;
          }
        }
      }
    }
