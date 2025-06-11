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

    res.json(rows);
});

router.post("/users", (req, res) => {
  res.send("Getting all users!");
});

router.delete("/users/:id", async (req, res) => {
  const { id } = req.params; // Access the user ID from the request parameters
  const {rows} = await pool.query('select * from users where id = $1', [id]);

  res.send("User deleted successfully!");
});

router.put("/users/:id", (req, res) => {
    const { id } = req.params; // Access the user ID from the request parameters
  res.send("Users route is working!" + id);
});
export default router;