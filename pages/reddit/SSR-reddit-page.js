import Layout from "../../components/layout";

function SSRRedditPage({ data }) {
    console.log("data", data)
    return (
        <Layout>
            {data.error ? <div>failed to load</div> : <div>OK!</div>}
        </Layout>
    )
}

// This gets called on every request
export async function getServerSideProps() {

    // Fetch data from external API
    const jsonData = await fetch(`https://www.reddit.com/r/reactjs.json?limit=10&dist=10`);
    const data = await jsonData.json()
    if (!data) {
        return {
            notFound: true,
        }
    }

    // Pass data to the page via props
    return { props: { data } }
}


export default SSRRedditPage