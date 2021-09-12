import boards from './boards.js';

const { board } = boards;

const fetchMock = () => Promise.resolve({ ok: true, json: () => Promise.resolve({ board }) });

export default fetchMock;
