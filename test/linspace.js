import should from "should";
import linspace from "../src/utils/linspace";

describe("Testing linspace", () => {
  it("should return an array of numbers", () => {
    linspace(-1, 1, 3).length.should.be.exactly(3);
    linspace(-1, 1, 3)[1].should.be.exactly(0);
  });
});
