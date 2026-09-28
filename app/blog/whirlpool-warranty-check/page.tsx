import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['whirlpool-warranty-check']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/whirlpool-warranty-check/'}}
export default function Page(){return <Article article={article}/>}
