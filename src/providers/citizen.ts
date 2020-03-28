import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from "@ionic-native/sqlite";
import { LoadingController } from "ionic-angular";
@Injectable()
export class MyCitizenDatabase {
  private db: SQLiteObject;
  loading: any;

  constructor(private sqlite: SQLite, public loadingCtrl: LoadingController) {
    this.connectToDb();
  }

  connectToDb() {
    this.sqlite
      .create({
        name: "data.db",
        location: "default"
      })
      .then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql(
          `create TABLE IF NOT EXISTS citizen(id BIGINT(20) PRIMARY KEY, 
                        age INT(11) NOT NULL,  
                        house_no TEXT NULL,
                        mobile TEXT NULL, 
                        pincode TEXT NULL, 
                        street TEXT NULL, 
                        voter_id TEXT NOT NULL, 
                        voter_segmentation TEXT NULL ,  
                        ac_hash TEXT NULL,  
                        address TEXT NULL, 
                        ward_no TEXT NULL, 
                        srno TEXT NULL,
                        responded_status TEXT , 
                        voted int , 
                        latitude TEXT , 
                        longitude TEXT  , 
                        state TEXT NULL, 
                        assembly_no TEXT NULL, 
                        booth_no TEXT NULL, 
                        family_name TEXT NULL, 
                        first_name TEXT NOT NULL, 
                        party_preference TEXT,
                        gender TEXT NOT NULL,
                        modifiedDate DATETIME,
                        volunteer_mobile TEXT)`,
          []
        )
          .then(data => {
            this.db
              .executeSql(` CREATE INDEX Idx1 ON citizen(ward_no,booth_no)`, [])
              .then(data => {
                console.log("Executed SQL for indexing");
              })
              .catch(e => {
                console.log(e);
              });
          })
          .catch(e => console.log("err while creating table", e));
      })
      .catch(e => console.log("err creating connection", e));
  }

  deleteCitizens() {
    return new Promise((resolve, reject) => {
      this.db
        .executeSql(`delete FROM citizen`, [])
        .then(data => {
          console.log("Executed SQL");
          resolve("Executed SQL");
        })
        .catch(e => {
          console.log(e);
          reject("err");
        });
    });
  }

  addUser(data) {
    return new Promise((resolve, reject) => {
      let insertRows = [];
      for (const item of data) {
        insertRows.push([
          `INSERT OR REPLACE INTO citizen (id , 
          age  ,  
          house_no , 
          mobile  , 
          pincode  , 
          street  , 
          voter_id  , 
          voter_segmentation , 
          ac_hash , 
          address, 
          ward_no,  
          srno,  
          responded_status, 
          voted , 
          latitude, 
          longitude, 
          state, 
          assembly_no, 
          booth_no, 
          family_name, 
          first_name, 
          party_preference,
          gender,modifiedDate) VALUES (?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?, ?,?, ?, ?,?)`,
          [
            item.id,
            item.age,
            item.houseNo,
            item.mobile,
            item.pincode,
            item.street,
            item.voterId,
            item.voterSegmentation,
            item.acHash,
            item.address,
            item.wardNo,
            item.srNo,
            item.respondedStatus,
            item.voted,
            item.latitude,
            item.longitude,
            item.state,
            item.assemblyNo,
            item.boothNo,
            item.familyName,
            item.firstName,
            item.partyPreference,
            item.gender,
            item.modifieddate
          ]
        ]);
      }

      this.db
        .sqlBatch(insertRows)
        .then(result => {
          let time = new Date().getTime();
          localStorage.setItem("last_synch_date", time.toString());
          resolve("success");
        })
        .catch(e => {
          reject(e);
          console.log(e);
        });
    });
  }

  getUser() {
    this.db
      .executeSql(`SELECT * FROM citizen`, [])
      .then(data => {
      })
      .catch(e => console.log(e));
  }

  searchVoters(data) {
    return new Promise((resolve, reject) => {
      let sql = "select * from citizen C where";
      let voterId = data["voterId"];
      let boothId = data["boothId"];
      let wardNo = data["wardNo"];
      let firstName = data["firstName"];
      let familyName = data["familyName"];
      let address = data["address"];
      let respondedStatus = data["respondedStatus"];
      let srno = data["srNo"];
      let wardNotFound = false;
      if (wardNo !== null && wardNo !== "" && wardNo != "All"  &&  wardNo != -1) {
        sql = sql + ` C.ward_no in (${wardNo}) and`;
      } else {
        wardNotFound = true;
      }

      if (boothId !== null && boothId !== "" && boothId != "-1" && boothId != -1) {
        if(wardNotFound && data["searchingWard"]){
          sql = sql + ` C.ward_no in (${data["searchingWard"]}) and`;
        }
        sql = sql + ` C.booth_no = '${boothId}' and`;
      }

      if (voterId != null && voterId !== "") {
        sql = sql + " C.voter_id like '%" + voterId + "%' and";
      }

      if (srno != null && srno !== "") {
        sql = sql + " C.srno = '" + srno + "' and";
      }

      if (firstName != null && firstName !== "" &&
        (familyName != null && familyName !== "") &&
        (address != null && address !== "")
      ) {
        sql =
          sql +
          " C.first_name like '" +
          firstName +
          "%' and C.family_name like '" +
          familyName +
          "%' and C.address like '%" +
          address +
          "%' and";
      } else if (
        firstName != null &&
        firstName !== "" &&
        familyName != null &&
        familyName !== ""
      ) {
        sql =
          sql +
          " C.first_name like '" +
          firstName +
          "%' and C.family_name like '" +
          familyName +
          "%' and";
      } else if (
        firstName != null &&
        firstName !== "" &&
        address != null &&
        address !== ""
      ) {
        sql =
          sql +
          " C.first_name like '" +
          firstName +
          "%' and C.address like '%" +
          address +
          "%' and";
      } else if (
        familyName != null &&
        familyName !== "" &&
        address != null &&
        address !== ""
      ) {
        sql =
          sql +
          " C.family_name like '" +
          familyName +
          "%' and C.address like '%" +
          address +
          "%' and";
      } else if (firstName != null && firstName !== "") {
        sql = sql + " C.first_name like '" + firstName + "%' and";
      } else if (familyName != null && familyName !== "") {
        sql = sql + " C.family_name like '" + familyName + "%' and";
      } else if (address != null && address !== "") {
        sql = sql + " C.address like '%" + address + "%' and";
      }

      if (
        respondedStatus != null &&
        respondedStatus !== "" &&
        respondedStatus != "not visited" &&
        respondedStatus != "none"
      ) {
        sql = sql + " C.responded_status = '" + respondedStatus + "' and";
      } else if (respondedStatus == "not visited") {
        sql = sql + " C.responded_status is null and";
      }
      
      sql = sql + " C.id is not null order by C.srno asc ";

      if (firstName && firstName.length > 0) {
        sql = sql + " , C.first_name asc";
      }

      if (familyName && familyName.length > 0) {
        sql = sql + " ,C.family_name asc";
      }
      console.log("Sql******", sql);
      this.db
        .executeSql(sql, [])
        .then(res => {
          let result = [];
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              result.push(res.rows.item(i));
            }
          }
          return resolve(result);
        })
        .catch(e => resolve(e));
    });
  }

  postLocation(id, value) {
    return new Promise((resolve, reject) => {
      this.db
        .executeSql(
          `update citizen set longitude ='${value.longitude}', latitude='${
            value.latitude
          }', volunteer_mobile ='${localStorage.getItem(
            "mobile"
          )}', modifiedDate= '${new Date().toISOString()}'  where id = ${id}`,
          []
        )
        .then(data => {
          resolve("Executed SQL");
        })
        .catch(e => {
          console.log(e);
          reject("Err");
        });
    });
  }

  postPartys(id, value) {
    return new Promise((resolve, reject) => {
      this.db
        .executeSql(
          `update citizen set party_preference ='${value}', responded_status = 'responded',modifiedDate= '${new Date().toISOString()}' where id = ${id}`,
          []
        )
        .then(data => {
          resolve("Executed SQL");
        })
        .catch(e => {
          console.log(e);
          reject("Err");
        });
    });
  }

  postSegmentation(id, value) {
    return new Promise((resolve, reject) => {
      this.db
        .executeSql(
          `update citizen set voter_segmentation ='${value}', responded_status = 'responded',modifiedDate= '${new Date().toISOString()}' where id = ${id}`,
          []
        )
        .then(data => {
          resolve("Executed SQL");
        })
        .catch(e => {
          console.log(e);
          reject("Err");
        });
    });
  }

  postCitizenVoted(id, value) {
    return new Promise((resolve, reject) => {
      this.db
        .executeSql(
          `update citizen set voted =${value},responded_status = 'responded',modifiedDate= '${new Date().toISOString()}' where id = ${id}`,
          []
        )
        .then(data => {
          resolve("Executed SQL");
        })
        .catch(e => {
          console.log(e);
          reject("Err");
        });
    });
  }

  postMobile(id, value) {
    return new Promise((resolve, reject) => {
      this.db
        .executeSql(
          `update citizen set mobile ='${value}',responded_status = 'responded',modifiedDate= '${new Date().toISOString()}' where id = ${id}`,
          []
        )
        .then(data => {
          resolve("Executed SQL");
        })
        .catch(e => {
          console.log(e);
          reject("Err");
        });
    });
  }

  postStatus(id, value) {
    return new Promise((resolve, reject) => {
      this.db
        .executeSql(
          `update citizen set responded_status = ? , modifiedDate= '${new Date().toISOString()}' where id = ?;`,
          [value, id]
        )
        .then(data => {
          resolve("Executed SQL");
        })
        .catch(e => {
          console.log(e);
          reject("Err");
        });
    });
  }

  getDataToSync() {
    return new Promise((resolve, reject) => {
      let lastsyncDate = localStorage.getItem("last_synch_date");
      lastsyncDate = new Date(Number(lastsyncDate)).toISOString();
      let sql = `SELECT id , 
      age,  
      mobile  , 
      voter_id as voterId, 
      voter_segmentation as voterSegmentation, 
      address, 
      srno,  
      responded_status as respondedStatus, 
      voted , 
      latitude, 
      longitude, 
      party_preference as partyPreference,
      modifiedDate,
      volunteer_mobile as volunteerMobile
      FROM citizen where modifiedDate >= '${lastsyncDate}'`;
      this.db
        .executeSql(sql, [])
        .then(res => {
          let result = [];
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              result.push(res.rows.item(i));
            }
          }
          return resolve(result);
        })
        .catch(e => resolve(e));
    });
  }
}
