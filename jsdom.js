import fs from 'fs';
import { JSDOM } from 'jsdom';

const html = fs.readFileSync('./index.html');
const page = new JSDOM(html);

export default page;
