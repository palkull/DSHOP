import { Router } from "express";
import { pool } from "../db.js"; // Adjust the path as necessary

const router = Router();

router.get("/users", async (req, res) => {

  const {rows} = await pool.query('SELECT * FROM users')
  res.json(rows);
});

router.get("/users/:id", async (req, res) => {
    const {id} = req.params; // Access the user ID from the request parameters Must have coincide with the name in the database
    const {rows} = await pool.query('select * from users where id = $1', [id]);

  if (rows.length === 0) {
    return res.status(404).json({ error: "User not found" }); }

    res.json(rows[0]); // Return the user data as JSON
});

router.post("/users", async (req, res) => {
  const data = req.body; // Get the data from the request body
  const {rows} = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [data.name, data.email]);
  console.log(rows);
  return res.json(rows[0]); // Return the newly created user
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params; // Access the user ID from the request parameters
  const {rows} = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
  console.log(rows);
  // Check if any rows were affected (deleted)
  if (result.rowCount === 0) {
    return res.status(404).json({ error: "User not found" });
  }
  res.send("User deleted successfully!");

});

router.put("/users/:id", async (req, res) => {
    const { id } = req.params; // Access the user ID from the request parameters
    const data = req.body; // Get the data from the request body
    const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [data.name, data.email, id]);
    console.log(result);
  
      res.send("User updated successfully!" + id);

  });
export default router;