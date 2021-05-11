import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'


export default function Home({ comments }) {
  console.log(comments);
  return (
    <div className={homeStyles.pos}>
      <Head>
        <title>Applikation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Title</h1>
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <br />
      <div className={homeStyles.cards}>
      { comments.map(comment => (
        <p className={homeStyles.card} key={comment.id}>{comment.body}</p>
      ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const comments = await res.json();

  return {
    props: {
      comments
    }
  }
}