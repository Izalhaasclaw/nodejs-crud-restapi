import db from '../config/db.js';

//1. menampilkan data dari tabel
export const getCategories = (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        //jika error
        if (err) res.status(500).json({ message: err });
        //jika berhasil
        res.json(results);
    });
};

//2. menyimpan data 
export const insertCategories = (req, res) => {
    const { name } = req.body;

    db.query("INSERT INTO categories (name) VALUES (?)",
         [name],
         (err, results) => {
      //jika error
        if (err) res.status(500).json({ message: err });
        //jika berhasil
        res.json({ message: "Data category berhasil di simpan" });
    }
);
};

//3. menampilkan data berdasrkan id
export const showCategories = (req, res) => {
    const{ id } = req.params;
    db.query('SELECT * FROM categories WHERE id = ?', [id], (err, results) => {
        //jika error
        if (err) res.status(500).json({ message: err });

        //jika data tidak ditemukan
        if (results.length === 0) {
            return res.status(404).json({ message: "Category tidak ditemukan" });
        }

        //jika berhasil
        res.json(results[0]);
    });
};

//4. update data berdasarkan id
export const updateCategories = (req, res) => {

    const { id } = req.params;
    const { name } = req.body;
    db.query("UPDATE categories SET name=? WHERE id=?",
[name, id],

(err, results) => {
//jika error
    if (err) return res.status(500).json({ message: err });
//jika berhasil
    res.json({ message: "Data category berhasil diupdate" });
    }
);
};

//5. delete data berdasarkan id
export const deleteCategories = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM categories WHERE id=?", [id], (err, results) => {
        //jika error
        if (err) return res.status(500).json({ message: err });
        //jika berhasil
        res.json({ message: "Data category berhasil dihapus" });
    });
};