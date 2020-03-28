import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class MySurveyQuestionDatabase {

  private db: SQLiteObject;
  constructor(private sqlite: SQLite) {
  }

  connectToDb() {
    return new Promise((resolve, rej) => {
      this.sqlite.create({
        name: 'data.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.db = db;
        db.executeSql(`create TABLE IF NOT EXISTS survey_question(id BIGINT(20) NOT NULL,question TEXT)`, [])
          .then((dara) => {
            resolve('Executed')
          }).catch(e => {
            console.log(e);
            rej(e)
          });
      })
        .catch(e => { console.log(e); rej(e) });
    })
  }


  addSurvey(data) {
    console.log("addSurvey")
    return new Promise((resolve, rej) => {
      const sql = `delete from survey_question`;
      this.db.executeSql(sql, []).then((deleted) => {
        let insertRows = `INSERT INTO survey_question (id ,question) VALUES (?, ?)`;
        if (data.length > 0) {
          this.db.executeSql(insertRows, [1, JSON.stringify(data)]).then((result) => {
            resolve(result)
          }).catch(e => { console.log(e); rej(e) });
        } else {
          resolve('Nodata')
        }
      }).catch(e => { console.log(e); rej(e) });
    });
  }

  getSurveyQuestions() {
    return new Promise((resolve, rej) => {
      let sql = `select * from survey_question`;
      this.db.executeSql(sql, []).then((res) => {
        let result = [];
        if (res.rows.length > 0) {
          for (let i = 0; i < res.rows.length; i++) {
            result.push(res.rows.item(i));
          }
        }
        return resolve(result);
      }).catch(e => { console.log(e); rej(e) });
    })
  }
}