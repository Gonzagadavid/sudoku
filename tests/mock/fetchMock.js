import board from './board.js';

const fetchMock = () => Promise.resolve({ ok: true, json: () => Promise.resolve({ board }) });

export default fetchMock;
