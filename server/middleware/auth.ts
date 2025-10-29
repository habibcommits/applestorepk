import type { Request, Response, NextFunction } from "express";

const ADMIN_PASSWORD = "AppleStore2024!";

export function adminAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized - Missing authentication" });
  }

  const token = authHeader.substring(7);
  
  if (token !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized - Invalid credentials" });
  }

  next();
}
