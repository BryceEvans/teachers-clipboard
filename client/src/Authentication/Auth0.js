import auth0 from 'auth0-js'


class Auth {
    //The constructor sets and grabs info.. Placing it in `this.auth0`
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'sirk.auth0.com',
            audience: 'https://sirk.auth0.com/userinfo',
            clientID: 'qxQNPGPkhNl5opa9vrPxxcbbawYv55yC',

            //should match Allowed Callback URL on Auth0.com
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile email'
        })
        this.handleAuthentication = this.handleAuthentication.bind(this)
        this.isAuthenticated = this.isAuthenticated.bind(this)
        this.signIn = this.signIn.bind(this)
        this.signOut = this.signOut.bind(this)
        
        this.getIdTokenPayload = this.getIdTokenPayload.bind(this)
        // this.getIdToken = this.getIdToken.bind(this)
        // this.getAccessToken = this.getAccessToken.bind(this)
    }


    getIdTokenPayload() {
        return this.getIdTokenPayload()
    }


    isAuthenticated() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt
    }

    signIn() {
        this.auth0.authorize()
    }

    signOut(){
      // Clear access token and ID token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      localStorage.removeItem('id_token_payload_name');

        this.auth0.logout({
          returnTo: 'http://localhost:3000',
          clientID: 'qxQNPGPkhNl5opa9vrPxxcbbawYv55yC'
        })
      }

    //Called immediately after being redirected from auth0
    //Fetches user details and idToken
    handleAuthentication() {
        return new Promise((resolve, reject) => {
          this.auth0.parseHash((err, authResult) => {
            if (err) return reject(err);
            if (!authResult || !authResult.idToken) {
              return reject(err);
            }
            this.setSession(authResult)
            resolve();
          });
        })
      }


      setSession(authResult) {
          console.log("SETSESSION WAS CALLED", authResult)
        // Set the time that the access token will expire at  
        const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem("id_token_payload_name", authResult.idTokenPayload.name)

      
        const email = authResult.idTokenPayload.email
        // this.checkEmail(email)
        // navigate to the dashboard route
        // history.replace('/dashboard');
      }

      // checkEmail(props) {
      //   componentDidMount() {
      //     const people = axios.get("http://localhost:5050/users")
      
      //     console.log('people', people);
      // }

      // }


      silentAuth() {
        return new Promise ((resolve, reject) => {
          this.auth0.checkSession({}, (err, authResult) => {
            if(err) return reject(err)
            this.setSession(authResult)
            resolve()
          })
        })
      }
      
}

const auth = new Auth()

export default auth