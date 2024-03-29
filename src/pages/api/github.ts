import { Octokit } from 'octokit';

export default async function handler(req: any, res: any) {
    const octokit = new Octokit();
    const response = await octokit.request('GET ' + req.query.apiUrl);
    res.status(200).json(response.data);
}
