var Pokedex = require("../index.js");
var chai = require('chai'),
  expect = chai.expect;

chai.use(require("chai-as-promised"));
chai.use(require("chai-things"));

describe("pokedex", function() {
  var promise,
    id = 5,
    P = new Pokedex();

  describe(".getBerryByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryFirmnessByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryFirmnessByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getBerryFlavorByName(Id: int)", function() {
    before(function() {
      promise = P.getBerryFlavorByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });

  describe(".getContestTypeByName(Id: int)", function() {
    before(function() {
      promise = P.getContestTypeByName(id);
    });
    it("should succeed", function() {
      return promise;
    });
    it("should have property name", function() {
      return expect(promise).to.eventually.have.property("name");
    });
  });
});