import express from "express";
import { deleteUserById, getUserById, getUsers } from "../../models/User";
import { STATUS_CODES,  } from "http";


export const getAllUsers = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
    // throw APIError("API Error", STATUS_CODES.INTERNAL_SERVER_ERROR, error); // 500                          
  }
};

export const deleteUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedUser = await deleteUserById(id);

    return res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateUser = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);

    if (!user) {
      console.log(`No user found with id: ${id}`);
      return res.sendStatus(404); // Not Found
    }
    user.username = username;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error instanceof Error);
    return res.sendStatus(400);
  }
};


  