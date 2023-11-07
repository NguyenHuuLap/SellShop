import { Router } from "express";
import { login, loginWithGoogle } from "../../interface-adapters/controllers/auth.controller.js";
import passport from "passport"
import jwtUtil from "../../utils/jwt.util.js";
import { passportConfig } from "../../data-access/passport.js";

const router = Router();
passportConfig(passport);

router.get("/login", login);

router.get("/google", passport.authenticate("google", {scope: ['profile', 'email', '_id']}));

router.get(
    '/google/callback',
    passport.authenticate("google", { failureRedirect: '/', session: false }),
    loginWithGoogle
  )
  
  router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
  })

export default router;