import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import userService from "../use-cases/user.service.js"
import encodedUtil from "../utils/encoded.util.js"
import imageService from "../use-cases/image.service.js"
<<<<<<< HEAD
import dotenv from 'dotenv';

dotenv.config()
=======
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805

export const passportConfig = (passport) => {
    passport.use(
        new GoogleStrategy({
<<<<<<< HEAD
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
=======
            clientID: '1025737882254-it45rivgdkgi15r1fdft8fo2utajb2ro.apps.googleusercontent.com',
            clientSecret: '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',
>>>>>>> 276fedb36618be75a78887ddfeb7c28f6edaa805
            callbackURL: 'http://localhost:3030/auth/google/callback',
        },
            async (accessToken, refreshToken, profile, done) => {
                const newUser = {
                    googleId: profile.id,
                    firstname: profile.name.givenName,
                    lastname: profile.name.familyName,
                    avatar: profile.photos[0].value,
                    email: profile.emails[0].value,
                    hashPassword: (encodedUtil.genRandomPassword()),
                    birth: profile.birthday

                };

                try {
                    let user = await userService.getOneByIdentity(newUser.email)
                    if (!user) {
                        const path = await imageService.getImageFromURL(newUser.avatar);
                        newUser.avatar = await imageService.uploadImage(path);
                        await imageService.unlinkImage(path);
                        user = await userService.add(newUser);
                    }
                    done(null, user);
                }
                catch (err) {
                    console.log(err);
                }
            }
        )
    )

    passport.serializeUser((user, done) => done(null, user._id))
    passport.deserializeUser((_id, done) => userService.getOneByIdentity(_id, (err, user) => done(err, user)));
}

export default {
    passportConfig
};

