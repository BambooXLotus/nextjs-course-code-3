import { NextApiRequest, NextApiResponse } from 'next';

import { connectDatabase, getDocuments, insertDocument } from '../../../helpers/db-uility';
import Comment from '../../../types/Comment';
import Event from '../../../types/Event';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { eventId } = req.query as { eventId: string };

	let client;
	try {
		client = await connectDatabase();
	} catch (error) {
		res.status(500).json({ message: 'Connecting to database failed!' });
		return;
	}

	if (req.method === 'POST') {
		const { email, name, text } = req.body as { email: string; name: string; text: string };

		if (!email || !email.includes('@') || !name || !text) {
			res.status(422).json({ message: 'Invalid Input!' });
			client.close();
			return;
		}

		const comment: Comment = {
			email: email,
			name: name,
			text: text,
			eventId: eventId,
		};

		let result;
		try {
			result = await insertDocument(client, 'comments', comment);

			comment.id = result.insertedId;

			res.status(201).json({ message: 'Comment Added!', comment: comment });
		} catch (error) {
			res.status(500).json({ message: 'Inserting data failed!' });
		}
	} else if (req.method === 'GET') {
		let comments;
		try {
			comments = await getDocuments(client, 'comments', {}, { _id: -1 });
			res.status(200).json({ comments: comments });
		} catch (error) {
			res.status(500).json({ message: 'Getting data failed!' });
		}
	}

	client.close();
};
export default handler;
