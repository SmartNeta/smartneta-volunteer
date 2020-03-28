import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class BoothProvider {
  boothdb: SQLiteObject;

  constructor(private sqlite: SQLite) { }

  connectToDb(): void {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.boothdb = db;
      db.executeSql(`create TABLE IF NOT EXISTS booth (id BIGINT(20) PRIMARY KEY,name TEXT NULL DEFAULT NULL,no TEXT NOT NULL,ward_id TEXT NOT NULL, ward_no TEXT NOT NULL, is_synced TEXT NOT NULL )`, [])
        .then(() => console.log('Executed SQL')).catch(e => console.log(e));
    })
      .catch(e => console.log(e));
  }

  addBooth(data) {
    let query = "DELETE FROM booth";
    this.boothdb.executeSql(query, [])
      .then((res) => {;
      }).catch(e => console.log(e));

    return new Promise((resolve, reject) => {
      let insertRows = [];
      for (const item of data) {
        insertRows.push([`INSERT OR REPLACE INTO booth (id , name, no,ward_id, ward_no,is_synced) VALUES (?, ?, ?,?,?,?)`,
        [item.id, item.name, item.no, !item.ward ? null : item.ward.id, !item.ward ? null : item.ward.no, 'false']
        ]);
      }
      this.boothdb.sqlBatch(insertRows).then((result) => {
        resolve('success')
      }).catch(e => {
        console.log(e)
        reject(e)
      });
    });
  }

  updateSyncStatus(id) {
    let updateRow = `update booth set is_synced = 'true' where no in ('${id}')`;
    this.boothdb.executeSql(updateRow, []).then((result) => {
    }).catch(e => console.log(e));
  }

  getAllBooths(wardNo) {
    return new Promise((resolve, reject) => {
      let result = []
      let sql = ''
      if (wardNo == '-1' || wardNo == 'All') {
        sql = 'select * from booth';
      } else {
        sql = `select * from booth where ward_no in (${wardNo});`;
      }

      this.boothdb.executeSql(sql, []).then((res) => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            result.push(res.rows.item(i));
          }
        }
        return resolve(result);
      }).catch(e => reject(e));
    })
  }

  getBoothNo(wardNo) {
    return new Promise((resolve, reject) => {
      let result = []
      let sql = ''
      if (wardNo == '-1') {
        sql = `select no from booth where is_synced = 'false'`;
      } else {
        sql = `select no from booth where ward_no =${wardNo}  and is_synced = 'false'`;
      }

      this.boothdb.executeSql(sql, []).then((res) => {
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            result.push(res.rows.item(i).no);
          }
        }
        return resolve(result);
      }).catch(e => reject(e));
    })
  }
}