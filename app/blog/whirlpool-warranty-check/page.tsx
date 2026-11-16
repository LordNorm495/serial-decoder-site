import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['whirlpool-warranty-check']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/whirlpool-warranty-check/'},openGraph:{type:'article' as const,locale:'en_US',siteName:'Serial-Decoder.com',title:article.title,description:article.intro,url:'/blog/whirlpool-warranty-check/'},twitter:{card:'summary' as const,title:article.title,description:article.intro}}
export default function Page(){return <Article article={article}/>}
