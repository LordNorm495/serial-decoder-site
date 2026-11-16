import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['real-estate-hvac-age-inspection']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/real-estate-hvac-age-inspection/'},openGraph:{type:'article' as const,locale:'en_US',siteName:'Serial-Decoder.com',title:article.title,description:article.intro,url:'/blog/real-estate-hvac-age-inspection/'},twitter:{card:'summary' as const,title:article.title,description:article.intro}}
export default function Page(){return <Article article={article}/>}
