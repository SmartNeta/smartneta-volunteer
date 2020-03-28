import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class WardProvider {
  warddb: SQLiteObject;
  constructor(private sqlite: SQLite) {
  }

  connectToDb(): void {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.warddb = db;
      db.executeSql(`create TABLE IF NOT EXISTS ward (id BIGINT(20) PRIMARY KEY,name TEXT NULL DEFAULT NULL,no TEXT NOT NULL)`, [])
        .then(() => console.log('Executed SQL'))
        .catch(e => console.log(e));
    })
      .catch(e => console.log(e));
  }

  addWards(data) {

    let query = "DELETE FROM ward";
    this.warddb.executeSql(query, [])
      .then((res) => {
      }).catch(e => console.log(e));

    return new Promise((resolve, reject) => {
        //////
      let insertRows = [];
      for (const item of data) {
        insertRows.push(["INSERT OR REPLACE INTO ward (id , name, no) VALUES (?, ?, ?)",
          [item.id, item.name, item.no]
        ]);
      }
      this.warddb.sqlBatch(insertRows).then((result) => {
        resolve('success')
      }).catch(e => {
        console.log(e)
        reject(e)
      });
    });
  }

  getAllWards() {
    console.log("Enter getAllWards");
    return new Promise((resolve, reject) => {
      let sql = 'select * from ward';
      this.warddb.executeSql(sql, []).then((res) => {
        let result = [];
        let arrLen = res.rows.length;
        if (arrLen > 0) {
          for (let i = 0; i < arrLen; i++) {
            result.push(res.rows.item(i));
          }
        }
        return resolve(result);
      }).catch(e => {
        console.warn(e);
        reject(e)
      });
    })
  }
}