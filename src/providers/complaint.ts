import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class MyComplaintDatabase {
  db: SQLiteObject;
  constructor(private sqlite: SQLite) {
    this.connectToDb()
  }
  connectToDb() {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql(`create TABLE IF NOT EXISTS complaints(
                      complaint TEXT NOT NULL,
                      compliantSource TEXT NOT NULL,
                      stateAssembly TEXT NOT NULL,
                      voterId TEXT NOT NULL,
                      citizen TEXT)`, [])
          .then(() => console.log('Executed SQL')).catch(e => console.log(e));

      })
      .catch(e => console.log(e));
  }

  addUser(item) {
    return new Promise((resolve, reject) => {
      let insertRows = [];
      insertRows.push([
        `INSERT INTO complaints(complaint , compliantSource , stateAssembly,voterId ) VALUES (?, ?, ?, ?)`,
        [item.complaint, item.compliantSource, JSON.stringify(item.stateAssembly), item.voterId]
      ]);

      this.db.sqlBatch(insertRows).then((result) => {
        resolve('success');
      }).catch(e => {
        reject(e);
      });
    });
  }

  upateUser(item) {
    return new Promise((resolve, reject) => {
      let insertRows = [];
      insertRows.push([
        `INSERT INTO complaints(complaint , compliantSource , stateAssembly,voterId ,citizen) VALUES (?, ?, ?, ?,?)`,
        [item.complaint, item.compliantSource, JSON.stringify(item.stateAssembly), item.citizen.voter_id, JSON.stringify(item.citizen)]
      ]);

      this.db.sqlBatch(insertRows).then((result) => {
        resolve('success');
      }).catch(e => {
        reject(e);
      });
    });
  }

  getDataToSync() {
    return new Promise((resolve, reject) => {
      this.db.executeSql(`SELECT * FROM complaints`, [])
        .then((res) => {
          let result = [];
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              res.rows.item(i)['stateAssembly'] = JSON.parse(res.rows.item(i).stateAssembly);
              if( res.rows.item(i)['citizen'] != null){
                res.rows.item(i)['citizen'] = JSON.parse(res.rows.item(i).citizen);
              }              
              result.push(res.rows.item(i));
            }
          }
          return resolve(result);
        }).catch(e => resolve(e));
    });
  }

  deleteComplaints() {
    return new Promise((resolve, reject) => {
      this.db.executeSql(`delete FROM complaints`, [])
        .then((res) => {
          return resolve('deleted');
        }).catch(e => resolve(e));
    });
  }
}