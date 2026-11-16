import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['what-does-hvac-serial-number-tell-you']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/what-does-hvac-serial-number-tell-you/'},openGraph:{type:'article' as const,locale:'en_US',siteName:'Serial-Decoder.com',title:article.title,description:article.intro,url:'/blog/what-does-hvac-serial-number-tell-you/'},twitter:{card:'summary' as const,title:article.title,description:article.intro}}
export default function Page(){return <Article article={article}/>}
