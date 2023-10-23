import db from "../config/mysql-connect.js";

export const addNewMember = (req, res) => {
  const { body } = req;
  db.query(
    `CALL InsertMember('${body.memberId}','${body.nama}','${body.namaPanggung}','${body.umur}','${body.tanggalLahir}','${body.tinggiBadan}','${body.jumlahShow}','${body.zodiak}','${body.golDarah}','${body.generasi}','${body.status}')`,
    (err, results) => {
      res.json({
        status: "success",
        payload: results,
      });
    }
  );
};

export const getAllMembers = (req, res) => {
  db.query("CALL GetAllMembers()", (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const editJumlahShow = (req, res) => {
  const { query } = req;
  db.query(`CALL addShowMember(${query.memberId},${query.additionalShows})`, (err, results) => {
    res.json({
      status: "success",
      payload: results,
    });
  });
};

export const editMember = (req, res) => {
  const { body } = req;
  db.query(
    `CALL UpdateMember(${body.memberId},'${body.nama}','${body.namaPanggung}',${body.umur},'${body.tanggalLahir}',${body.tinggiBadan},${body.jumlahShow},'${body.zodiak}','${body.golDarah}','${body.generasi}','${body.status}')`,
    (err, results) => {
      res.json({
        status: "success",
        payload: results,
      });
    }
  );
};

// export const deleteMemberbyId = (req, res) => {
//     const { query } = req;
//     db.query(`CALL DeleteMember(${query.memberIdToDelete})`, (err, results) => {
//     res.json({
//         status: "success",
//         payload: results,
//     });
//     });
//   }
