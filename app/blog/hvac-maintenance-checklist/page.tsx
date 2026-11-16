import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['hvac-maintenance-checklist']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/hvac-maintenance-checklist/'},openGraph:{type:'article' as const,locale:'en_US',siteName:'Serial-Decoder.com',title:article.title,description:article.intro,url:'/blog/hvac-maintenance-checklist/'},twitter:{card:'summary' as const,title:article.title,description:article.intro}}
export default function Page(){return <Article article={article}/>}
