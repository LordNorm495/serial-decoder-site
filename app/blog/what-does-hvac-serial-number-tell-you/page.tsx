import Article from '@/components/Article'
import { articles } from '@/lib/articles'
const article=articles['what-does-hvac-serial-number-tell-you']
export const metadata={title:article.title,description:article.intro,alternates:{canonical:'/blog/what-does-hvac-serial-number-tell-you/'}}
export default function Page(){return <Article article={article}/>}
