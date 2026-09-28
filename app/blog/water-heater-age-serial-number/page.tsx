import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['water-heater-age-serial-number']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/water-heater-age-serial-number/'}}
export default function Page(){return <Article article={article}/>}
