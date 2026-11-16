import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['hvac-repair-vs-replace']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/hvac-repair-vs-replace/'},openGraph:{type:'article' as const,locale:'en_US',siteName:'Serial-Decoder.com',title:article.title,description:article.intro,url:'/blog/hvac-repair-vs-replace/'},twitter:{card:'summary' as const,title:article.title,description:article.intro}}
export default function Page(){return <Article article={article}/>}
