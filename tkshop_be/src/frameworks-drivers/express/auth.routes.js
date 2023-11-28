import { Router } from "express";
import { login, loginWithGoogle, register } from "../../interface-adapters/controllers/auth.controller.js";
import passport from "passport"
import { passportConfig } from "../../data-access/passport.js";

const router = Router();
passportConfig(passport);

router.post("/login", login);

router.get("/google", [
  // multerMiddleware.tempUpload.fields([{ name: 'avatar', maxCount: 1 }]),
  passport.authenticate("google", { scope: ['profile', 'email'] })
]);

router.get(
  '/google/callback',
  [passport.authenticate("google", { failureRedirect: '/', session: false })],
  loginWithGoogle
)

router.post("/register", register);

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

export default router;