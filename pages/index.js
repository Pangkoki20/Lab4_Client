import Head from 'next/head'
import styles from '../styles/Home.module.css'

//ทำการเปิด port 3000 รอรับการเชื่อมต่อ ถ้ามี Client ร้องขอหน้า page ที่ Server จะทำการตอบ status 200 พร้อมกับ Hello World
// var http = require('http');
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-type': 'text/plain' });
//   res.end('Hello World \n');
// });
// server.listen(3000);
// console.log('Server is ready !! ');
// ---------------------------------------------------------------------------------------------------------- //
//การรอรับ GET method และทำการส่งข้อมูลกลับไปให้ Client โดยคำสั่ง res.send
//Query String
// const express = require('express');
// const app = express();
// app.get('/greeting', (req, res) => {
//   let greetText = req.query.str1 + " " + req.query.str2
//   res.send(`<html><h1 style="align:center;" >${greetText}</h1></body></html>`)
// })
// app.listen(3000);

// ---------------------------------------------------------------------------------------------------------- //
//Params ******
// ******************************************************************************************************** //
// const express = require('express');
// const app = express();
// app.get('/greeting/:str1/:str2', (req, res) => {
//   console.log(req)
//   let greetText = req.params.str1 + " " + req.params.str2
//   res.send(`<html><body><h1 style="align:center;">Hey:
// ${greetText}</h1></body></html>`)
// })
// app.listen(3000);

// ---------------------------------------------------------------------------------------------------------- //
//Body parser
// const express = require('express'),
//   app = express(),
//   bodyParser = require('body-parser');
// const urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(express.static(__dirname + '/public'));
// app.post('/add', urlencodedParser, function (req, res) {
//   let result = parseInt(req.body.a) + parseInt(req.body.b);
//   res.send('Result = ' + result);
// });
// app.listen(3000);

// ---------------------------------------------------------------------------------------------------------- //
//Cookie ใช้เก็บข้อมูลฝั่งผู้ใช้ ผ่าน middleware
// const express = require('express')
// const app = express()
// const cookieParser = require('cookie-parser')
// app.use(cookieParser('keyboard cat')) //‘keyboard cat’ is a secret key to sign cookie (prevent cookie tamper)
// app.get('/ck_get', function (req, res) {
//   res.send(req.cookies)
// })
// app.get('/ck_set', function (req, res) {
//   res.cookie('a', 10)
//   res.send('ok')
// })
// app.listen(3000)

// ---------------------------------------------------------------------------------------------------------- //
//Session
// const express = require('express')
// const app = express()
// const session = require('express-session')
// // sign cookie (for a session)
// app.use(session({
//   secret: 'keyboard cat', cookie: { maxAge: 60000 },
//   resave: false, saveUninitialized: false
// }))
// // resave => Forces the session to be saved back to the session store, even if the session was never modified
// // saveUninitialized => the cookie will not be set on a response with an uninitialized session
// app.use(function (req, res, next) {
//   var sess = req.session
//   if (sess.views) {
//     sess.views++
//   } else {
//     sess.views = 1
//   }
//   console.log(sess.views)
//   next();
// })
// app.get('/', function (req, res) {
//   res.send('count =' + req.session.views)
// })
// app.listen(3000)

// ---------------------------------------------------------------------------------------------------------- //
//การสร้าง API ในการส่ง Task
const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
let tasks = [
  { id: 1, name: 'Do homework' },
  { id: 2, name: 'Read book' },
  { id: 3, name: 'Write a program' }]
app.use(cors())
app.get('/', (req, res) => {
  res.json(tasks)
})
app.listen(PORT, () => console.log(`listen at ${PORT}`))



// ---------------------------------------------------------------------------------------------------------- //

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
