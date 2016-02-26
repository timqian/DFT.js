import linspace from "./utils/linspace";

class ParticleInBox1D {
  constructor({halfLength=10, points=100} = {}) {
    this.halfLength = halfLength;
    this.points = points;
  }

  /**
   * return lowest n eigen value and eigen vectors
   * @return {[type]} [description]
   */
  solve() {
    X = linspace(-this.halfLength, this.halfLength, this.points);
    h = X[2] - X[1];

  }

}
