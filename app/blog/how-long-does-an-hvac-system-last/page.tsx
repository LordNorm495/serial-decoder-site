import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['how-long-does-an-hvac-system-last']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/how-long-does-an-hvac-system-last/'}}
export default function Page(){return <Article article={article}/>}
