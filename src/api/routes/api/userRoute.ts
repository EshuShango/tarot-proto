import express, { Request, Response, Router } from "express";
import { User } from "../../models/User";

const router: Router = express.Router();

// Define routes
router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Cant find by Id" });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const newUser = await user.save();
    res.status(200).json(newUser);
  } catch (err : unknown) {
    console.error(err instanceof Error)
    res.status(500).json({ message: "Cant create user" });
  }
});

export default router;

/* when user clicks the "pull"-btn 
  the sends a request to the server connecting to the Database(MongoDB)
  the Server Gets the cards based from the Schema-Model
  and Populates that data
   */
