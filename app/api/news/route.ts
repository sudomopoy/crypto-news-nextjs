import type { NextApiRequest, NextApiResponse } from 'next';
import News from '../../lib/models/news.model';
import dbConnect from '../../lib/mongoose';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const news = await News.find({});
                res.status(200).json(news);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const news = await News.create(req.body);
                res.status(201).json(news);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const { id } = req.query;
                const news = await News.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });
                if (!news) {
                    return res.status(404).json({ success: false });
                }
                res.status(200).json(news);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const { id } = req.query;
                const deletedNews = await News.deleteOne({ _id: id });
                if (!deletedNews) {
                    return res.status(404).json({ success: false });
                }
                res.status(200).json(deletedNews);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}
