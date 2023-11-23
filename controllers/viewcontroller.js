import db from "../config/mysql-connect.js";

export const getViewJiko = (req, res) => {
  db.query("SELECT * FROM view_jikoshoukai", (err, results) => {
    try {
        res.json({
            status: "success",
            payload: results,
          });
    } catch (error) {
        
    }
  });
};

export const getViewTeam = (req, res) => {
  db.query("SELECT * FROM view_team_member", (err, results) => {
    try {
        res.json({
            status: "success",
            payload: results,
          });
    } catch (error) {
        
    }
  });
};

