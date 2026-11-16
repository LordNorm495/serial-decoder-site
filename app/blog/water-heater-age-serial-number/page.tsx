import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['water-heater-age-serial-number']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/water-heater-age-serial-number/'},openGraph:{type:'article' as const,locale:'en_US',siteName:'Serial-Decoder.com',title:article.title,description:article.intro,url:'/blog/water-heater-age-serial-number/'},twitter:{card:'summary' as const,title:article.title,description:article.intro}}
export default function Page(){return <Article article={article}/>}
