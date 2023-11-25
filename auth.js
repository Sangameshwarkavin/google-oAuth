const passport = require('passport');
const GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID = '581438799518-9imhb53qmcd3h6cqaq0g9drvlfl6at8e.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret:  GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
   return done(null, profile);
 }
));

passport.serializeUser(function(user,done){
    done(null,user);
});

passport.deserializeUser(function(user,done){
    done(null,user);
});