import db from "../config/mysql-connect.js";

export const deleteJM = (req, res) => {
  const { memberId } = req.params;
  db.query(`CALL removeJM(${memberId})`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results,
      });
    } catch (error) {}
  });
};

export const getAllJM = (req, res) => {
  db.query("CALL GetAllJM()", (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results[0],
      });
    } catch (error) {}
  });
};

export const addNewJM = (req, res) => {
    const { memberId, jikoId } = req.body;
    db.query(`CALL InsertJikoMember('${memberId}','${jikoId}')`, (err, results) => {
      try {
        res.json({
          status: "success",
          payload: results,
        });
      } catch (error) {
        
      }
    });
  };

  export const updateJM = (req, res) => {
    const { body } = req;
    db.query(`CALL UpdateJikoMember('${body.memberId}','${body.jikoIdToUpdate})','${body.newJikoId}')`, (err, results) => {
      try {
        res.json({
          status: "success",
          payload: results,
        });
      } catch (error) {
        
      }
    });
  };