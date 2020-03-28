import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class MySurveyAnswerDatabase {
  db: SQLiteObject;
  constructor(private sqlite: SQLite) {
    this.connectToDb()
  }

  connectToDb(): void {
    this.sqlite.create({
      name: 'data.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      db.executeSql('create TABLE IF NOT EXISTS survey_answers(answer TEXT)', [])
        .then(() => console.log('Executed SQL')).catch(e => console.log(e));
    })
      .catch(e => console.log(e));
  }

  addSurveyAnswer(data) {
    return new Promise((resolve, rej) => {
      let insertRows = [];
      if (data.length > 0) {
        for (const item of data) {
          insertRows.push([`INSERT INTO survey_answers (answer) VALUES (?)`, [JSON.stringify(item)]]);
        }
        this.db.sqlBatch(insertRows).then((result) => {
          resolve(result);
        }).catch(e => console.log(e));
      } else {
        console.log('no survey answers')
        resolve('Nodata')
      }
    });
  }

  getDataToSync() {
    return new Promise((resolve, reject) => {
      this.db.executeSql(`SELECT * FROM survey_answers`, [])
        .then((res) => {
          let result = [];
          if (res.rows.length > 0) {
            for (let i = 0; i < res.rows.length; i++) {
              let ans = JSON.parse(res.rows.item(i).answer)
              result.push(ans);
            }
          }
          return resolve(result);
        }).catch(e => resolve(e));
    });
  }

  deleteAnswers() {
    return new Promise((resolve, reject) => {
      this.db.executeSql(`delete FROM survey_answers`, [])
        .then((res) => {
          return resolve('deleted');
        }).catch(e => resolve(e));
    });
  }
}