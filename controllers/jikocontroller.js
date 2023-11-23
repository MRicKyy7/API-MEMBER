import db from "../config/mysql-connect.js";

export const editJiko = (req, res) => {
  const { query } = req;
  db.query(`CALL UpdateJikoshoukai(${query.jikoIdToUpdate},'${query.newJikoText}')`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results,
      });
    } catch (error) {
      
    }
  });
};

export const getAllJiko = (req, res) => {
  db.query("CALL GetAllJiko()", (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results[0],
      });
    } catch (error) {
      
    }
  });
};

export const getAllJikobyid = (req, res) => {
  const { jikoId } = req.params;
  db.query(`CALL GetAllJikoById(${jikoId})`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results[0],
      });
    } catch (error) {
      
    }
  });
};

export const addNewJiko = (req, res) => {
  const { body } = req;
  db.query(`CALL InsertJikoshoukai(${body.jikoId},'${body.jiko}')`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results,
      });
    } catch (error) {
      
    }
  });
};

export const deleteJiko = (req, res) => {
  const { jikoId } = req.params;
  db.query(`CALL DeleteJikoshoukai(${jikoId})`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results,
      });
    } catch (error) {
      
    }
  });
};
