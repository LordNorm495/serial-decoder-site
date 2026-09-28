import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['real-estate-hvac-age-inspection']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/real-estate-hvac-age-inspection/'}}
export default function Page(){return <Article article={article}/>}
