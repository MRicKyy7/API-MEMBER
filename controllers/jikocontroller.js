import db from "../config/mysql-connect.js";

export const editJiko = (req, res) => {
  const { query } = req;
  db.query(`CALL UpdateJikoshoukai(${query.jikoIdToUpdate},'${query.newJikoText}')`, (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const getAllJiko = (req, res) => {
  db.query("CALL GetAllJiko()", (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const addNewJiko = (req, res) => {
  const { body } = req;
  db.query(`CALL InsertJikoshoukai(${body.jikoId},'${body.jiko}')`, (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const deleteJiko = (req, res) => {
  const { query } = req;
  db.query(`CALL DeleteJikoshoukai(${query.jikoIdToDelete})`, (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};
