import db from "../config/db.js" ;

//1. menampilkan data dari tabel
export const getUsers = (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        
        if (err) res.status(500).json({message: err});

        res.json(result);
    });
};

//2. menyimpan data 
export const insertUser = (req, res) => {
    const {name, email, password} = req.body;

    db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)",
        [name, email, password],
        (err, results) => {

            if (err) res.status(500).json({ message: err})

            res.json({message: "Data berhasil disimpan"})
        }
    );
};

//3. menampilkan data berdasrkan id
export const showUser = (req, res) => {
    const {id} = req.params;

    db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
        if (err) res.status(500).json({message: err});

        if (result.length === 0) {
            res.status(400).json({message: "Data tidak ditemukan"});
        }

        res.json(result[0]);
    });
};

//4. update data berdasarkan id
export const updateUser = (req, res) => {
    const {id} = req.params;
    const {name, email, } = req.body;

    db.query(
        "UPDATE users SET name=?, email=? WHERE id=?",
        [name, email, id],
        (err, results) => {
            if (err) res.status(500).json({message: err});

            res.json({message: "Data berhasil diupdate"});
        }
    );
};

//5. delete data berdasarkan id
export const deleteUser = (req, res) => {
    const {id} = req.params;

    db.query("DELETE FROM users WHERE id=?", [id], (err, results) => {

        if (err) res.status(500).json({message: err});

        res.json({message: "Data berhasil dihapus"});

    });
};

