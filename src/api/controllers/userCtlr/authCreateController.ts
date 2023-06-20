import express from "express";
import { getUserByEmail, createUser } from "../../models/User";
import { authentication, random } from "../../helpers";

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    }
    const user = await getUserByEmail(email).select(
      "+authentication +authentication.password"
    );
    if (!user) {
      return res.sendStatus(400);
    }
    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password == expectedHash) {
      return res.sendStatus(403);
    }

    const salt = random();
    user.authentication.sessionToken = authentication(
      salt,
      user._id.toString()
    );

    await user.save();

    res.cookie("USER-AUTH", user.authentication.sessionToken, {
      domain: "localhost",
      path: "/",
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.sendStatus(400);
    }
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.sendStatus(400);
    }

    const salt = random();
    // console.log("Password:", password);
    // console.log("Salt:", salt);
    // console.log("Hashed password:", authentication(password, salt));

    const user = await createUser({
      email,
      username,
      authentication: {
        password: authentication(password, salt),
        salt,
      },
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
