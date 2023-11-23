import db from "../config/mysql-connect.js";

export const UpdateTeam = (req, res) => {
  const { teamId, namaTeam } = req.body;
  db.query(
    `CALL UpdateTeam('${teamId}','${namaTeam}')`,
    (err, results) => {
      try {
        res.json({
          status: "success",
          payload: results,
        });
      } catch (error) {
        
      }
    }
  );
};

export const getAllTeam = (req, res) => {
  db.query("CALL GetAllTeam()", (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results[0],
      });
    } catch (error) {
      
    }
  });
};

export const DeleteTeam = (req, res) => {
  const { teamId } = req.params;
  db.query(`CALL DeleteTeam('${teamId}')`, (err, results) => {
    if (err) {
      res.status(500).json({
        status: "error",
        message: "Gagal menghapus Team",
        error: err.message,
      });
    } else {
      if (results.affectedRows > 0) {
        res.json({
          status: "success",
          message: `Team dengan ID ${teamId} berhasil dihapus`,
          payload: results,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `Team dengan ID ${teamId} tidak ditemukan`,
        });
      }
    }
  });
};

export const InsertTeam = (req, res) => {
  const { teamId, namaTeam } = req.body;
  db.query(`CALL InsertTeam('${teamId}','${namaTeam}')`, (err, results) => {
    try {
      res.json({
        status: "success",
        payload: results,
      });
    } catch (error) {
      
    }
  });
};
