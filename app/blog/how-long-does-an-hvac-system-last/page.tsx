import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['how-long-does-an-hvac-system-last']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/how-long-does-an-hvac-system-last/'},openGraph:{type:'article' as const,locale:'en_US',siteName:'Serial-Decoder.com',title:article.title,description:article.intro,url:'/blog/how-long-does-an-hvac-system-last/'},twitter:{card:'summary' as const,title:article.title,description:article.intro}}
export default function Page(){return <Article article={article}/>}
