import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import {getSortedPostsData} from '../lib/posts'
import Date from '../components/date'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        },
        revalidate: 1
    }
}

export default function Home({allPostsData}) {
    console.log("allPostsData", allPostsData)
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Self Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
                </p>
                <p>
                    (This is a my {' '}
                    <Link href="/posts/first-post">
                        <a>first post</a>
                    </Link>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={utilStyles.heading2Xl}>
                <Link href="/reddit/reddit-page">
                    <a>Reddit-page</a>
                </Link>
            </section>
            <section className={utilStyles.heading2Xl}>
                <Link href="/reddit/SSR-reddit-page">
                    <a>SSR-Reddit-page</a>
                </Link>
            </section>
        </Layout>
    )
}