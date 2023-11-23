import db from "../config/mysql-connect.js";

export const moveMember = (req, res) => {
  const { query } = req;
  db.query(`CALL MoveMemberToTeam(${query.memberId},${query.newTeamId})`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results,
      });
    } catch (error) {
      
    }
  });
};

export const getAllTM = (req, res) => {
  db.query("CALL GetAllTM()", (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results[0],
      });
    } catch (error) {
      
    }
  });
};

export const deleteTM = (req, res) => {
  const { memberId } = req.params;
  db.query(`CALL removeTM(${memberId})`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results,
      });
    } catch (error) {
      
    }
  });
};

export const addNewTM = (req, res) => {
  const { memberId, teamId } = req.body;
  db.query(`CALL InsertTeamMember('${memberId}',${teamId})`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results,
      });
    } catch (error) {
      
    }
  });
};
