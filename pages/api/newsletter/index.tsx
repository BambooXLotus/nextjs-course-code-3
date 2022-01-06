import { NextApiRequest, NextApiResponse } from 'next';

import { connectDatabase, insertDocument } from '../../../helpers/db-uility';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { email } = req.body as { email: string };

	if (req.method === 'POST') {
		if (!email || !email.includes('@')) {
			res.status(422).json({ message: 'Invalid email address' });
			return;
		}

		let client;
		try {
			client = await connectDatabase();
		} catch (error) {
			res.status(500).json({ message: 'Connecting to database failed!' });
			return;
		}

		try {
			await insertDocument(client, 'newsletters', { email: email });

			client.close();
		} catch (error) {
			res.status(500).json({ message: 'Inserting data failed!' });
			return;
		}

		res.status(201).json({ message: 'Signed Up!' });
	}
};
export default handler;
