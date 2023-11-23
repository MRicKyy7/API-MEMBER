import db from "../config/mysql-connect.js";

// export const addNewMember = (req, res) => {
//   const { memberId, nama, namaPanggung, umur, tanggalLahir, tinggiBadan, jumlahShow, zodiak, golDarah, generasi, status } = req.body;
//   db.query(`CALL InsertMember('${memberId}','${nama}','${namaPanggung}',${umur},'${tanggalLahir}',${tinggiBadan},${jumlahShow},'${zodiak}','${golDarah}','${generasi}','${status}')`, (err, results) => {
//     if (err) {
//       res.status(500).json({
//         status: "error",
//         message: "Gagal menambahkan member",
//         error: err.message,
//       });
//     } else {
//       res.json({
//         status: "success",
//         message: "Member berhasil ditambahkan",
//         payload: results,
//       });
//     }
//   });
// };

export const addNewMember = (req, res) => {
  const { memberId, nama, namaPanggung, umur, tanggalLahir, tinggiBadan, jumlahShow, zodiak, golDarah, generasi, status } = req.body;
  db.query(`CALL InsertMember('${memberId}','${nama}','${namaPanggung}',${umur},'${tanggalLahir}',${tinggiBadan},${jumlahShow},'${zodiak}','${golDarah}','${generasi}','${status}')`, (err, results) => {
    try {
      if (err) {
        throw new Error(err.message);
      }

      res.json({
        status: "success",
        message: "Member berhasil ditambahkan",
        payload: results,
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Gagal menambahkan member",
        error: error.message,
      });
    }
  });
};


export const getAllMembers = (req, res) => {
  db.query("CALL GetAllMembers()", (err, results) => {
    try {
      if (err) {
        throw new Error(err.message);
      }
      res.json({
        status: "success",
        payload: results[0],
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Gagal mendapatkan data member",
        error: error.message,
      });
    }
  });
};

export const editJumlahShow = (req, res) => {
  const { memberId, additionalShows } = req.query;
  db.query(`CALL addShowMember(${memberId},${additionalShows})`, (err, results) => {
    try {
      if (err) {
        throw new Error(err.message);
      }
      res.json({
      status: "success",
      payload: results,
    });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Gagal merubah jumlah show",
        error: error.message,
      });
    }
  });
};

export const editMember = (req, res) => {
  const { body } = req;
  db.query(
    `CALL UpdateMember(${body.memberId},'${body.nama}','${body.namaPanggung}',${body.umur},'${body.tanggalLahir}',${body.tinggiBadan},${body.jumlahShow},'${body.zodiak}','${body.golDarah}','${body.generasi}','${body.status}')`,
    (err, results) => {
      try {
        if (err) {
          throw new Error(err.message);
        }

        if (results.affectedRows > 0) {
          res.json({
            status: "success",
            message: `Member dengan ID ${body.memberId} berhasil diperbarui`,
            payload: results,
          });
        } else {
          res.status(404).json({
            status: "error",
            message: `Member dengan ID ${body.memberId} tidak ditemukan`,
          });
        }
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: "Gagal memperbarui member",
          error: error.message,
        });
      }
    }
  );
};

export const getMembersById = (req, res) => {
  const { memberId } = req.params;
  db.query(`CALL GetMembersById(${memberId})`, (err, results) => {
    try {
      if (err) {
        throw new Error(err.message);
      }

      if (results[0].length > 0) {
        res.json({
          status: "success",
          message: `Member dengan ID ${memberId} berhasil ditemukan`,
          payload: results[0][0], // Mengambil data pertama dari hasil
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `Member dengan ID ${memberId} tidak ditemukan`,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Gagal mengambil member",
        error: error.message,
      });
    }
  });
};


export const deleteMemberbyId = (req, res) => {
  const memberId = req.params.memberId; 
  db.query(`CALL DeleteMemberbyId('${memberId}')`, (err, results) => {
    try {
      if (err) {
        throw new Error(err.message);
      }

      if (results.affectedRows > 0) {
        res.json({
          status: "success",
          message: `Member dengan ID ${memberId} berhasil dihapus`,
          payload: results,
        });
      } else {
        res.status(404).json({
          status: "error",
          message: `Member dengan ID ${memberId} tidak ditemukan`,
        });
      }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Gagal menghapus member",
        error: error.message,
      });
    }
  });
};

