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

  // Initialize the index of the current token
  let i = 0;

  // Define the root node of the abstract syntax tree
  const ast = {
    type: "Program",
    body: []
  };

  // Loop through the tokens, attempting to match expressions
  while (i < tokens.length) {
    // Try to match an expression
    const expression = matchExpression();
    if (expression) {
      // If an expression was matched, add it to the body of the AST
      ast.body.push({
        type: "ExpressionStatement",
        expression: {
          type: "BinaryExpression",
          operator: expression[1],
          left: {
            type: "Literal",
            value: expression[0]
          },
          right: {
            type: "Literal",
            value: expression[2]
          }
        }
      });
    }
    // If no expression was matched, throw an error
    else {
      throw new Error("Unexpected token: " + tokens[i]);
    }
  }

  // Return the AST
  return ast;
}
