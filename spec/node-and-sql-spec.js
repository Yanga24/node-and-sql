let { Visitors } = require("../src/node-and-sql");

let visitor = new Visitors();
let visitor1 = new Visitors(
  "Shalon Louw",
  54,
  "05-01-2020",
  "09:23",
  "Shalon Louw",
  "She's been good to me"
);
let visitor2 = new Visitors(
  "Sinzo Govuza",
  25,
  "04-08-2020",
  "13:31",
  "Shaun Nkosi",
  "she is nice"
);

describe("Visitor", function () {
  it("should check if the createTable is defined", function () {
    expect(visitor1.createTable).toBeDefined();
  });
  it("should check if the addNewVisitor is defined", function () {
    expect(visitor1.addNewVisitor).toBeDefined();
  });
  it("should check if the deleteVisitor is defined", function () {
    expect(visitor1.deleteVisitor).toBeDefined();
  });
  it("should check if the updateVisitorInfo is defined", function () {
    expect(visitor1.updateVisitorInfo).toBeDefined();
  });
  it("should check if the selectOneVisitor is defined", function () {
    expect(visitor1.selectOneVisitor).toBeDefined();
  });
  it("Should check if deleteAllVisitors function is defined", () => {
    expect(visitor.deleteAllVisitors).toBeDefined();
  });
});

describe("Visitor", function () {
  it("should check if the createTable is defined", function () {
    expect(visitor2.createTable).toBeDefined();
  });
  it("should check if the addNewVisitor is defined", function () {
    expect(visitor2.addNewVisitor).toBeDefined();
  });
  it("should check if the deleteVisitor is defined", function () {
    expect(visitor2.deleteVisitor).toBeDefined();
  });
  it("should check if the updateVisitorInfo is defined", function () {
    expect(visitor2.updateVisitorInfo).toBeDefined();
  });
  it("should check if the selectOneVisitor is defined", function () {
    expect(visitor2.selectOneVisitor).toBeDefined();
  });
  it("Should check if deleteAllVisitors function is defined", () => {
    expect(visitor.deleteAllVisitors).toBeDefined();
  });
});
