import { getAuth } from "@clerk/express";

export const protect = (req, res, next) => {
  const auth = getAuth(req);
  console.log("AUTH DEBUG:", auth);   // 👈 add this

  const { userId } = auth;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  req.userId = userId;
  next();
};
