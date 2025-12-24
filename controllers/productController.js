import db from '../config/db.js';

//1. menampilkan data dari table products
export const getProduct = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        //jika error
        if (err) res.status(500).json({ message: err });
        //jika berhasil
        res.json(results);
    });
};

//2. menampilkan data dari table products 
export const createProduct = (req, res) => {
    const { name, price, category_id } = req.body;

    db.query("INSERT INTO products (name, price, category_id) VALUES (?, ?, ?)",
         [name, price, category_id],
         (err, results) => {
      //jika error
        if (err) res.status(500).json({ message: err });
        //jika berhasil
        res.json({ message: "Data product berhasil di simpan" });
    }
);
};

//3. menampilkan data berdasarkan id
export const showProduct = (req, res) => {
    const{ id } = req.params;
    db.query('SELECT * FROM products WHERE id = ?', [id], (err, results) => {
        //jika error
        if (err) res.status(500).json({ message: err });

        //jika data tidak ditemukan
        if (results.length === 0) {
            return res.status(404).json({ message: "Product tidak ditemukan" });
        }

        //jika berhasil
        res.json(results[0]);
    });
};

//4. update data product berdasarkan id
export const updateProduct = (req, res) => {

    const { id } = req.params;
    const { name, price, category_id } = req.body;
    db.query("UPDATE products SET name=?, price=?, category_id=? WHERE id=?",
[name, price, category_id, id],
(err, results) => {
//jika error
    if (err) return res.status(500).json({ message: err });
//jika berhasil
    res.json({ message: "Data product berhasil diupdate" });
    }
);
};

//5. delete product berdasarkan id
export const deleteProduct = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM products WHERE id=?", [id], (err, results) => {
        //jika error
        if (err) return res.status(500).json({ message: err });
        //jika berhasil
        res.json({ message: "Data product berhasil dihapus" });
    });
};
