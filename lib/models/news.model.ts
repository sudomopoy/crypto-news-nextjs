import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this news.'],
        maxlength: [60, 'Title cannot be more than 60 characters'],
    },
    short_description: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
      type: String,
      required: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.News || mongoose.model('News', NewsSchema);
