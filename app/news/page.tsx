"use client";

import { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setNews, addNews, fetchNews } from '@/reducers/news.reducer'
import { RootState } from '@/store'
import { INews } from '@/lib/types'
import NewsCard from '@/components/NewsCard'
import { useSearchParams } from 'next/navigation';

interface NewsCardProps {
    initialNews: INews[]
}

const Newslist: FC<NewsCardProps> = () => {
    const searchParams = useSearchParams();
    const dispatch = useDispatch()
    const news = useSelector((state: RootState) => state.news.news)
    const limit = 10;
    const [page, setPage] = useState(searchParams.get("page") || 1);

    async function loadNews() {
        await dispatch(fetchNews({page, limit}));
    }
    useEffect(() => {
        loadNews();
        console.log(news,'news');
        
    }, [])

    const handleAddNews = async () => {
        const title = prompt('Title:')
        const content = prompt('Content:')
        if (title && content) {
            const { data } = await axios.post('/api/news', { title, content })
            dispatch(addNews(data))
        }
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-4xl my-4">Breaking News🔥</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {news.map((item) => (
                    <NewsCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Newslist
