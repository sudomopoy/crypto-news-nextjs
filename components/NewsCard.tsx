import { FC, } from 'react'
import { INews } from '@/lib/types'
import Link from 'next/link'
import Image from 'next/image'

interface NewsCardProps extends INews {
}

const NewsCard: FC<NewsCardProps> = ({ id, title, short_description, image, description, created_at }) => {
    return (
        <Link href={`/news/${id}`} id={`news_${id}`} className="container mx-auto border-2
         border-gray-500 ">
            <Image width={200} height={200} className='w-full rounded-lg' alt={title} src={image || "/images/news.png"} />
            <div className=' px-2 py-3'>
                <h1 className="text-2xl">{title}</h1>
                <p className="text-lg">{short_description}</p>
            </div>
        </Link>
    )
}

export default NewsCard
