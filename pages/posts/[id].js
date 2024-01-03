import Layout from "@/components/Layout";
import { getAllPostIds, getPostData } from "@/lib/post";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";
import Head from "next/head";
export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log(paths);
  return {
    paths,
    fallback: false //falseにすることで上記のパスに含まれていないパスにアクセスすると４０４になるようにする。
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log(postData);
  return {
    props: {
      postData,
    }
  };
}

// [id].jsとすることでurl /posts/[id]のようにすることができる
export default function Post({ postData }) {
  return (
    <Layout>
        <Head>
           <title> {postData.title}</title>
        </Head>
<article>
    <h1 className="utilStyles.headingxl">
        {postData.title}
    </h1>
    <div className={utilStyles.lightText}>
        {postData.date}
    </div>
          
          <div dangerouslySetInnerHTML={{__html:postData.contentHTML}} />

</article>

    </Layout>
  );
}
