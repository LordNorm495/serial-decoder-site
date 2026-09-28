import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['hvac-maintenance-checklist']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/hvac-maintenance-checklist/'}}
export default function Page(){return <Article article={article}/>}
