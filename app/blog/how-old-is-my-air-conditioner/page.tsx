import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['how-old-is-my-air-conditioner']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/how-old-is-my-air-conditioner/'},openGraph:{type:'article' as const,locale:'en_US',siteName:'Serial-Decoder.com',title:article.title,description:article.intro,url:'/blog/how-old-is-my-air-conditioner/'},twitter:{card:'summary' as const,title:article.title,description:article.intro}}
export default function Page(){return <Article article={article}/>}
