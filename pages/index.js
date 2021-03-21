import Head from 'next/head'
import styles from '../styles/Home.module.css'

//ทำการเปิด port 8000 รอรับการเชื่อมต่อ ถ้ามี Client ร้องขอหน้า page ที่ Server จะทำการตอบ status 200 พร้อมกับ Hello World
// var http = require('http');
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-type': 'text/plain' });
//   res.end('Hello World \n');
// });
// server.listen(8000);
// console.log('Server is ready !! ');
// ---------------------------------------------------------------------------------------------------------- //
//การรอรับ GET method และทำการส่งข้อมูลกลับไปให้ Client โดยคำสั่ง res.send
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.listen(8000);

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
