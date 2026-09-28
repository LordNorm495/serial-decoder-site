import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['hvac-repair-vs-replace']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/hvac-repair-vs-replace/'}}
export default function Page(){return <Article article={article}/>}
