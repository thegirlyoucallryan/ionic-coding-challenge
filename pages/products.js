import Layout from "../components/Layout";
import { NextSeo } from 'next-seo';


export default function products() {
    return(
        <div>
    <NextSeo
      title="Simple Usage Example"
      description="A short description goes here."
    />

        <Layout>
            <div className="text-white text-center text-3xl mt-56 float mb-96 p-24 px-8 bg-accent-orng rounded-md">
                Here are all of the products!
            </div>
        </Layout>
        </div>
    )
  }