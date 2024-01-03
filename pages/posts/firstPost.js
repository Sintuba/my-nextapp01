import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
export default function FirstPost(){
    return (
<Layout Home>
            <>
                <Head>
                    <title>最初の投稿</title>
                </Head>
                <h1>最初の投稿</h1>
                <Link href="/">ホームへ戻る</Link>
            </>
</Layout>
    );
}