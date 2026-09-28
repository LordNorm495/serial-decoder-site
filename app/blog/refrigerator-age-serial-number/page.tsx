import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['refrigerator-age-serial-number']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/refrigerator-age-serial-number/'}}
export default function Page(){return <Article article={article}/>}
