"use client";

import {FC} from 'react';
import BaseLayout from "@/components/BaseLayout";

interface NewsItemProps {
    id: string;
    title: string;
    content: string;
}

const NewsItem: FC<NewsItemProps> = ({id, title, content}) => {
    return (
            <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold">{title}</h2>
                <p>{content}</p>
                {/* You can add edit and delete buttons here */}
            </div>
    );
};

export default NewsItem;
