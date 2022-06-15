import { useState, useEffect } from 'react'
import { Amplify, API } from 'aws-amplify'
import awsExports from '../../amplify/aws-exports'
Amplify.configure(awsExports)

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import * as queries from '../../amplify/backend/api/mysite/queries'
import * as mutations from '../../amplify/backend/api/mysite/mutations'
import { Button } from '../components/atoms/Button'

const articlesDetails = {
  content: 'hello world! ' + new Date(),
  title: 'TITLE!',
  datetime: '1970-01-01T07:00:00.000Z',
}

const Home: NextPage = () => {
  const [articles, setArticles] = useState([])
  const [selectedId, setSelectedId] = useState<string>('')
  const [updateValue, setUpdateValue] = useState<string>('')

  useEffect(() => {
    fetchArticles()
    getArticle()
  }, [])

  async function getArticle() {
    const oneTodo = await API.graphql({
      query: queries.getArticles,
      variables: { id: '8c0c13ca-8f26-49f5-a8f0-a09230441de7' },
    })
  }

  async function fetchArticles() {
    try {
      const articles: any = await API.graphql({ query: queries.listArticles })
      const items = articles.data.listArticles.items
      setArticles(items)
    } catch (err) {
      console.log('error fetching todos')
    }
  }

  async function createArticle() {
    await API.graphql({
      query: mutations.createArticles,
      variables: { input: articlesDetails },
    })
  }

  async function updateArticle() {
    await API.graphql({
      query: mutations.updateArticles,
      variables: { input: { id: selectedId, content: updateValue } },
    })
  }

  async function deleteArticle() {
    await API.graphql({
      query: mutations.deleteArticles,
      variables: { input: { id: selectedId, _version: 5 } },
    })
  }

  function onCheckItem(id: string) {
    setSelectedId(id)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Button>hello world</Button>
        <table className={styles['list-table']}>
          <tbody>
            <tr>
              <th>選択</th>
              <th>id</th>
              <th>title</th>
              <th>content</th>
            </tr>
            {articles.map((article: any, key) => {
              return (
                <tr key={key}>
                  <td>
                    <input
                      type="radio"
                      name="input"
                      onClick={() => onCheckItem(article.id)}
                    />
                  </td>
                  <td>{article.id}</td>
                  <td>{article.title}</td>
                  <td>{article.content}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className={styles['button-block']}>
          <div>
            <button type="button" onClick={createArticle}>
              投稿！
            </button>
          </div>
          <div>
            <input
              type="text"
              id="update-text"
              value={updateValue}
              onChange={(e) => setUpdateValue(e.target.value)}
            />
            <button type="button" onClick={updateArticle}>
              更新！
            </button>
          </div>
          <div>
            <button type="button" onClick={deleteArticle}>
              削除！
            </button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
