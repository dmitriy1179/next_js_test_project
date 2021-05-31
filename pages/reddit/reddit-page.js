import useSWR from 'swr';
import Layout from "../../components/layout";


const fetchData = async (url) => {
    const jsonData = await fetch(url);
    return await jsonData.json()
}


function RedditPage() {
    const { data, error } = useSWR(`https://www.reddit.com/r/reactjs.json?limit=10&dist=10`, fetchData)
    console.log("data", data)
    console.log("error", error)

    return (
        <Layout>
            { error ? <div>failed to load</div> :
                (!data ? <div>loading...</div> :
                    <div>OK!</div>)
            }
        </Layout>
    )
}

export default RedditPage