const jsTemplate = require("../");
const assert = require("assert");

describe("js-template", function() {
  it("answers the question", function() {
    assert.equal("The answer is 42!", jsTemplate);
  });
});
