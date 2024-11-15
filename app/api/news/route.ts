import type {NextApiRequest, NextApiResponse} from 'next';
import News from '../../../lib/models/news.model';
import dbConnect from '../../../lib/mongoose';
import {NextRequest} from "next/server";

export const dynamic = 'force-static'


export async function GET(request: Request) {
    await dbConnect();
    try {
        const news = await News.find({});
        return Response.json({
            success: true,
            result: news,
        });
    } catch (error) {
        return Response.json({
            success: false,
            error: error,
        });
    }

}

export async function POST(request: NextRequest) {
    // if (!request.file) {
    //     return request.json({error: 'No file uploaded'},{status:400});
    // }
    await dbConnect();
    const body = await request.json();
    try {
        const news = await News.create(body);
        return Response.json(news);
    } catch (error) {
        return Response.json({
            success: false,
            error: error,
        }, {
            status: 400
        });
    }
};

export async function PUT(request: NextRequest) {
    await dbConnect();

    try {
        const searchParams = request.nextUrl.searchParams
        const id = searchParams.get('id')
        const res = await request.json()

        const news = await News.findByIdAndUpdate(id, res, {
            new: true,
            runValidators: true,
        });
        if (!news) {
            return Response.json({success: false});
        }
        return Response.json(news);
    } catch (error) {
        return Response.json({success: false});
    }
}

export async function DELETE(request: NextRequest) {
    await dbConnect();

    try {
        const searchParams = request.nextUrl.searchParams
        const id = searchParams.get('id')
        const deletedNews = await News.deleteOne({_id: id});
        if (!deletedNews) {
            return Response.json({success: false});
        }
        return Response.json(deletedNews);
    } catch (error) {
        return Response.json({success: false});
    }
}