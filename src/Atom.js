class Atom {
  constructor({atomNum=1, length=4, points=40} = {}) {
    this.atomNum = atomNum;
    this.length = length;
    this.points = points;
  }


  getEigs() {

  }

}
/*
g = 40; g3 = g^3;
p = linspace(-4, 4, g);         % one dimensiton space lattice
[X, Y, Z] = meshgrid(p, p, p);  % three dimension space lattice
h = p(2) - p(1);                % latice spacing
X = X(:); Y = Y(:); Z = Z(:);   % all elements of array as a single column
R = sqrt(X.^2 + Y.^2 + Z.^2);   % distance from the center
Vext = -1 ./ R;                 % potential energy
e = ones(g,1);
L = spdiags([e -2*e e], -1:1, g, g) / h^2; % 1D finite difference Laplacian
I = speye(g);
L3 = kron(kron(L,I), I) + kron(kron(I, L), I) + kron(kron(I, I), L);  % extend Laplacian to 3 D
H = -0.5 * L3 + spdiags(Vext, 0, g3, g3);  % Hamiltonian of H atom
[PSI,E] = eigs(H, 1, 'sa');                      % Smallest eigenvalue of H
%disp(['Total energy for Hydrogen atom' num2str(E*27.21, 5) 'eV']); %display result
%PSI_3 = reshape(PSI, [g,g,g]);
scatter3(X,Y,Z,PSI.^2 *9000);*/


export default Atom;
