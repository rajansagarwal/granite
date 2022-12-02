function generate(ast) {
  // Define a function to generate code for a BinaryExpression node
  function generateBinaryExpression(node) {
    // Generate code for the left and right sides of the expression
    const left = generate(node.left);
    const right = generate(node.right);

    // Return the generated code
    return left + " " + node.operator + " " + right;
  }

  // Define a function to generate code for a Literal node
  function generateLiteral(node) {
    // Return the value of the literal
    return node.value;
  }

  // Define a function to generate code for a Program node
  function generateProgram(node) {
    // Initialize an array to store the generated code for each statement
    const statements = [];

    // Loop through the body of the program, generating code for each statement
    for (const statement of node.body) {
      statements.push(generate(statement));
    }

    // Return the generated code, joined with newline characters
    return statements.join("\n");
  }

  // Define a function to generate code for an ExpressionStatement node
  function generateExpressionStatement(node) {
    // Generate code for the expression
    const expression = generate(node.expression);

    // Return the generated code
    return expression + ";";
  }

  // Define a map of node types to code generation functions
  const generators = {
    BinaryExpression: generateBinaryExpression,
    Literal: generateLiteral,
    Program: generateProgram,
    ExpressionStatement: generateExpressionStatement
  };

  // Get the code generation function for the given node
  const generator = generators[node.type];

  // If a code generation function was found, call it and return the result
  if (generator) {
    return generator(node);
  }
  // If no code generation function was found, throw an error
  else {
    throw new Error("Unknown node type: " + node.type);
  }
}
