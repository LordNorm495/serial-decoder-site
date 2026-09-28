import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['how-old-is-my-air-conditioner']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/how-old-is-my-air-conditioner/'}}
export default function Page(){return <Article article={article}/>}
