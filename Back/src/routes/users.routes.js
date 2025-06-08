import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  res.send("Users route is working!");
});

router.get("/users/:id", (req, res) => {
    const {userId} = req.params.id; // Access the user ID from the request parameters
    res.send("Users route is working!");
});

router.post("/users", (req, res) => {
  res.send("Getting all users!");
});

router.delete("/users/:id", (req, res) => {
  res.send("User deleted successfully!");
});

router.put("/users/:id", (req, res) => {
    const { id } = req.params; // Access the user ID from the request parameters
  res.send("Users route is working!" + id);
});
export default router;