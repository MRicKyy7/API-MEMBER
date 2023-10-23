import db from "../config/mysql-connect.js";

export const moveMember = (req, res) => {
  const { query } = req;
  db.query(`CALL MoveMemberToTeam(${query.memberId},${query.newTeamId})`, (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const getAllTM = (req, res) => {
  db.query("CALL GetAllTM()", (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const deleteTM = (req, res) => {
  const { query } = req;
  db.query(`CALL remove_member_from_team(${query.member_id_to_remove})`, (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const addNewTM = (req, res) => {
  const { body } = req;
  db.query(`CALL InsertTeamMember(${body.member_id_param},${body.team_id_param})`, (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};
