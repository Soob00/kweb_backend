const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

 // 3.1
function objToStr(obj) {
  return Object.keys(obj)
    .map((key) => `${key}: ${obj[key]}`)
    .join('\n');
}

 app.get('/', (req, res) => {
  if (!Object.keys(req.query).length) {
    return res.send('error');
  }
  res.send(objToStr(req.query));
 });

 app.post('/', (req, res) => {
  const body = req.body;
  res.send(objToStr(body));
 });

 app.put('/', (req, res) => {
  const body = req.body;
  res.send(objToStr(body));
 });


 // 3.2
 app.get('/board/page/:page', (req, res) => {
   const page = req.params.page;
   res.send(`This is page #${page}`);
 });

// 3.3
function factorial(n) {
  if (n < 0) return 'rewrite';
  let fac_result = 1;
  for (let i = 2; i <= n; i++) {
    fac_result = i*fac_result;
  }
  return fac_result;
}

app.get('/factorial', (req, res) => {
  const number = req.query.number;
  if (!number) {
    return res.send('rewrite');
  }
  res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
  const number = parseInt(req.params.number);
  const fac_result2 = factorial(number);
  res.send(`${fac_result2}`);
});

//3.4
app.get('/login', (req, res) => {
  res.send(`
    <form method="POST" action="/login">
      <div>
        <label>Username:</label>
        <input id="username-input" name="username" type="text">
      </div>
      <div>
        <label>Password:</label>
        <input id="password-input" name="password" type="password">
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if(!username || !password){
      return res.send('error');
    }
    res.send(`${username}, ${password}`);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});