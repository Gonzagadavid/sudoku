import {
  expect, describe, it, jest, beforeEach,
} from '@jest/globals';
import functions from '../../js/functions';
import views from '../../js/views';
import page from '../../jsdom';
import boards from '../mock/boards.js';

const { renderOptions } = functions;
const { board } = boards;

global.window.document.body.innerHTML = page.window.document.body.innerHTML;
