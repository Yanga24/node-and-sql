let { Visitor} = require("pg");

let pool = new Pool({
  user: "user",
  password: "pass",
  host: "localhost",
  port: 5432,
  database: "db"
});

class Visitors {
  constructor(fullName, age, dateOfVisit, timeOfVisit, assistedBy, comments) {
    this.fullName = fullName;
    this.age = age;
    this.dateOfVisit = dateOfVisit;
    this.timeOfVisit = timeOfVisit;
    this.assistedBy = assistedBy;
    this.comments = comments;
  }

                                                                                                                     
 async createTable() {
    try {
      await pool.connect();
      await pool.query(
        "create table Visitors(visitorID , fullname VARCHAR(50), visitorsage , dateofvisit DATE, timeofvisit TIME, assistedBy VARCHAR(50), comments VARCHAR(100))"
      );
    } catch (err) {
      console.log(err);
    } finally {
      return "Successfully created the table";
    }
  }

  async  addNewVisitor() {
    try {
      await pool.connect();
      await pool.query(
        "insert into visitors(fullname, visitorsage, dateofvisit, timeofvisit, assistedby, comments) values ($1,$2,$3,$4,$5,$6) ON CONFLICT DO NOTHING",
        [
          this.fulName,
          this.age,
          this.dateOfVisit,
          this.timeOfVisit,
          this.assistedBy,
          this.comments
        ]
      );
      console.log(query)
    } catch (err){
      thrown (err)
    }
  }

  async  listAllVisitors() {
    try {
      await pool.connect();
      let { rows } = await pool.query("Select * from visitors");
      console.table(rows);
    } catch (err) {
      console.log(e);
    }
  }                                                                                                    

  async   deleteVisitor() {
    try {
      await pool.connect();
      await pool.query("delete from visitors WHERE fullname = $1", [
        this.fullName
      ]);
      console.log("Visitor successfully deleted")
    } catch (e) {
      console.log(e);
    } 
  }

  async  updateVisitorInfo(columnToUpdate, newInfo) {
    try {
      await pool.connect();
      await pool.query(
        "update visitors SET " + columnToUpdate + " = $1 WHERE fullname = $2",
        [newInfo, this.fullName]
      );
      console.log("Visitor information successfully updated")
    } catch (e) {
      throw Error("Visitor information not update");
    } 
  }

  async   selectOneVisitor(visitorID) {
    try {
      await pool.connect();
      let {
        rows
      } = await pool.query("SELECT * from visitors WHERE visitorid = $1", [
        visitorID
      ]);
      console.table(rows);
    } catch (e) {
      console.log(e);
    }
  }

  async  deleteAllVisitors() {
    try {
      pool.connect();
      pool.query("DELETE from visitors");
      console.log("Visitors Successfully deleted");
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = { Visitors
};

