import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['ac-refrigerant-r22-r410a-r454b']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/ac-refrigerant-r22-r410a-r454b/'}}
export default function Page(){return <Article article={article}/>}
