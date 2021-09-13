import boards from './boards.js';

const { board, boardMedium } = boards;
const endPointEasy = 'https://sugoku.herokuapp.com/board?difficulty=easy';
const endPointMedium = 'https://sugoku.herokuapp.com/board?difficulty=medium';

const fetchMock = async (url) => {
  if (url === endPointEasy) return ({ ok: true, json: async () => ({ board }) });
  if (url === endPointMedium) return ({ ok: true, json: async () => ({ board: boardMedium }) });
  return { ok: false };
};
export default fetchMock;
