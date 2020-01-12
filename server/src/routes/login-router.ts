import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}
const loginRouter = Router();

loginRouter.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.isLoggedIn) {
    res.send(`
       <div>
          <h1>You are logged in.</h1>
          <a href='/logout'> Logout </a>
          </div>
      `);
  } else {
    res.send(`
      <div>
         <h1>Please login</h1>
         <a href='/login'> Login </a>
      </div> 
     `);
  }
});

loginRouter.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'hi@hi.com' && password === 'password') {
    req.session = {
      isLoggedIn: true
    };
    res.redirect('/');
  }
});
 
 
loginRouter.get('/logout', (req: Request, res: Response) => {
    req.session = undefined; 
    res.redirect('/')
});


loginRouter.get('/login', (req: Request, res: Response) => {
  res.send(`<form method='POST'>
              <div>
                    <label>Email</label>
                    <input type='text' name='email' >
                </div>
                <div>
                  <label>Password</label>
                  <input type='password' name='password' >
                </div>
                <button>Login</button>
            </form>`);
});

export { loginRouter };
