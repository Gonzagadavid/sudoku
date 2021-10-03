/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/functions/btnSelect.js":
/*!***********************************!*\
  !*** ./js/functions/btnSelect.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ btnSelect)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main.js */ \"./js/main.js\");\n\n\nfunction btnSelect() {\n  const selected = document.querySelector('.selected');\n  if (selected) selected.classList.remove('selected');\n  const levelBtn = document\n    .querySelector(`[value=\"${(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].difficulty || 'easy').toUpperCase()}\"]`);\n  if (levelBtn) levelBtn.classList.add('selected');\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/btnSelect.js?");

/***/ }),

/***/ "./js/functions/checkCompleted.js":
/*!****************************************!*\
  !*** ./js/functions/checkCompleted.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkCompleted)\n/* harmony export */ });\nfunction checkCompleted(board) {\n  if (!board) return false;\n  let bool = true;\n  board.forEach((row) => row.forEach((number) => {\n    if (number === 0) bool = false;\n  }));\n  return bool;\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/checkCompleted.js?");

/***/ }),

/***/ "./js/functions/createHtmlElement.js":
/*!*******************************************!*\
  !*** ./js/functions/createHtmlElement.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHtmlElement)\n/* harmony export */ });\nfunction createHtmlElement(type = 'div', attributes = {}) {\n  const element = document.createElement(type);\n  const attributesKey = Object.keys(attributes);\n  attributesKey.forEach((attribute) => {\n    element[attribute] = attributes[attribute];\n  });\n\n  return element;\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/createHtmlElement.js?");

/***/ }),

/***/ "./js/functions/fetchBoard.js":
/*!************************************!*\
  !*** ./js/functions/fetchBoard.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBoard)\n/* harmony export */ });\n/* harmony import */ var _btnSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnSelect.js */ \"./js/functions/btnSelect.js\");\n/* harmony import */ var _views_createCardGame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/createCardGame.js */ \"./js/views/createCardGame.js\");\n/* harmony import */ var _views_createClearBtn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/createClearBtn.js */ \"./js/views/createClearBtn.js\");\n\n\n\n\nfunction clearCard() {\n  const content = document.getElementById('content');\n  if (content.lastChild) content.lastChild.remove();\n  if (content.lastChild) content.lastChild.remove();\n}\n\nasync function fetchBoard(url, clear, content) {\n  if (!content) return;\n  const response = await fetch(url);\n  if (!response.ok) throw new Error('A requisão do jogo falhou');\n  const objBoard = await response.json();\n  const { board } = objBoard;\n  if (clear) clearCard();\n  const card = (0,_views_createCardGame_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board);\n  content.appendChild(card);\n  content.appendChild((0,_views_createClearBtn_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(board));\n  (0,_btnSelect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/fetchBoard.js?");

/***/ }),

/***/ "./js/functions/getOptions.js":
/*!************************************!*\
  !*** ./js/functions/getOptions.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getOptions)\n/* harmony export */ });\nfunction getOptions(x, y, board) {\n  if (board[x][y]) throw new Error('invalid verification');\n\n  const startX = x < 3 ? 0 : x < 6 ? 3 : 6;\n  const startY = y < 3 ? 0 : y < 6 ? 3 : 6;\n  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n  const usedNumbers = [];\n\n  for (let index = 0; index < board.length; index += 1) {\n    usedNumbers.push(board[x][index]);\n    usedNumbers.push(board[index][y]);\n  }\n\n  for (let xIndex = startX; xIndex < startX + 3; xIndex += 1) {\n    for (let yIndex = startY; yIndex < startY + 3; yIndex += 1) {\n      usedNumbers.push(board[xIndex][yIndex]);\n    }\n  }\n\n  return options.filter((number) => !usedNumbers.includes(number));\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/getOptions.js?");

/***/ }),

/***/ "./js/functions/index.js":
/*!*******************************!*\
  !*** ./js/functions/index.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _btnSelect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./btnSelect.js */ \"./js/functions/btnSelect.js\");\n/* harmony import */ var _checkCompleted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkCompleted.js */ \"./js/functions/checkCompleted.js\");\n/* harmony import */ var _createHtmlElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _getOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getOptions.js */ \"./js/functions/getOptions.js\");\n/* harmony import */ var _renderOptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderOptions.js */ \"./js/functions/renderOptions.js\");\n/* harmony import */ var _fetchBoard_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fetchBoard.js */ \"./js/functions/fetchBoard.js\");\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  fetchBoard: _fetchBoard_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  btnSelect: _btnSelect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  checkCompleted: _checkCompleted_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  createHtmlElement: _createHtmlElement_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  getOptions: _getOptions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  renderOptions: _renderOptions_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n});\n\n\n//# sourceURL=webpack://sudoku/./js/functions/index.js?");

/***/ }),

/***/ "./js/functions/renderOptions.js":
/*!***************************************!*\
  !*** ./js/functions/renderOptions.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderOptions)\n/* harmony export */ });\n/* harmony import */ var _views_createOptionsContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/createOptionsContainer.js */ \"./js/views/createOptionsContainer.js\");\n/* harmony import */ var _getOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getOptions.js */ \"./js/functions/getOptions.js\");\n\n\n\nfunction renderOptions(event, board) {\n  const containerOld = document.querySelector('.options-container');\n  if (containerOld) containerOld.parentElement.removeChild(containerOld);\n  const element = event.target;\n  const x = +element.id.replace(/(x=)|y=\\d/g, '');\n  const y = +element.id.replace(/(y=)|x=\\d/g, '');\n  const options = (0,_getOptions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x, y, board);\n  (0,_views_createOptionsContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, options, board, y);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/functions/renderOptions.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"gameInit\": () => (/* binding */ gameInit)\n/* harmony export */ });\n/* harmony import */ var _functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/fetchBoard.js */ \"./js/functions/fetchBoard.js\");\n/* harmony import */ var _views_createBtnContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/createBtnContainer.js */ \"./js/views/createBtnContainer.js\");\n/* harmony import */ var _views_createContactContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/createContactContainer.js */ \"./js/views/createContactContainer.js\");\n/* harmony import */ var _views_insertTitle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/insertTitle.js */ \"./js/views/insertTitle.js\");\n\n\n\n\n\nconst gameState = { difficulty: 'easy' };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameState);\n\nconst gameInit = () => {\n  const content = document.getElementById('content');\n  (0,_views_createContactContainer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(content);\n\n  (0,_views_insertTitle_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(content);\n\n  (0,_views_createBtnContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(content);\n\n  const url = `https://sugoku.herokuapp.com/board?difficulty=${gameState.difficulty}`;\n  (0,_functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, false, content);\n};\n\ngameInit();\n\n\n//# sourceURL=webpack://sudoku/./js/main.js?");

/***/ }),

/***/ "./js/views/clearNumber.js":
/*!*********************************!*\
  !*** ./js/views/clearNumber.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearNumber)\n/* harmony export */ });\nfunction clearNumber(element, board) {\n  if (!element.innerHTML) return;\n  const x = +element.id.replace(/(x=)|y=\\d/g, '');\n  const y = +element.id.replace(/(y=)|x=\\d/g, '');\n  board[x][y] = 0;\n  element.innerHTML = '';\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/clearNumber.js?");

/***/ }),

/***/ "./js/views/createBtnContainer.js":
/*!****************************************!*\
  !*** ./js/views/createBtnContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createBtnContainer)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main.js */ \"./js/main.js\");\n/* harmony import */ var _functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/fetchBoard.js */ \"./js/functions/fetchBoard.js\");\n\n\n\n\nfunction nextLevel() {\n  const content = document.getElementById('content');\n  const url = `https://sugoku.herokuapp.com/board?difficulty=${_main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].difficulty}`;\n  (0,_functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(url, true, content);\n}\n\nfunction renderDifficult(event) {\n  _main_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].difficulty = event.target.value.toLowerCase();\n  nextLevel();\n}\n\nfunction addBtn(parentElement, value) {\n  const btnAttributes = {\n    className: 'btn-difficult',\n    value,\n    innerHTML: value,\n  };\n  const btn = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', btnAttributes);\n  btn.addEventListener('click', (e) => renderDifficult(e));\n  parentElement.appendChild(btn);\n}\n\nfunction createBtnContainer(content) {\n  if (!content) return;\n  const btnContainer = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'btn-container' });\n  const arrayDifficult = ['EASY', 'MEDIUM', 'HARD', 'RANDOM'];\n  arrayDifficult.forEach((dif) => addBtn(btnContainer, dif));\n  content.appendChild(btnContainer);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createBtnContainer.js?");

/***/ }),

/***/ "./js/views/createCardGame.js":
/*!************************************!*\
  !*** ./js/views/createCardGame.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createCardGame)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _functions_renderOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/renderOptions.js */ \"./js/functions/renderOptions.js\");\n\n\n\nfunction fillLine(axleY, y, x, board) {\n  const colAttributes = { id: `x=${x} y=${y}`, className: 'number', innerHTML: axleY || '' };\n  const number = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', colAttributes);\n  if (axleY === 0) {\n    number.addEventListener('click', (event) => (0,_functions_renderOptions_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, board));\n    number.classList.add('try');\n  }\n  return number;\n}\n\nfunction createLine(axleX, x, board) {\n  const rowCard = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'row-card' });\n  axleX.forEach((axleY, y) => rowCard.appendChild(fillLine(axleY, y, x, board)));\n  return rowCard;\n}\n\nfunction createCardGame(board) {\n  const cardContainer = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'card-container' });\n  board.forEach((axleX, x) => cardContainer.appendChild(createLine(axleX, x, board)));\n  return cardContainer;\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createCardGame.js?");

/***/ }),

/***/ "./js/views/createClearBtn.js":
/*!************************************!*\
  !*** ./js/views/createClearBtn.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createClearBtn)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _clearNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearNumber.js */ \"./js/views/clearNumber.js\");\n\n\n\nfunction clearBoard(event, board) {\n  const tryNumbers = document.querySelectorAll('.try');\n  tryNumbers.forEach((element) => (0,_clearNumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element, board));\n}\n\nfunction createClearBtn(board) {\n  const clearContainer = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'clear-container' });\n  const clearBtnAttributes = {\n    className: 'clear-btn',\n    innerHTML: 'CLEAR BOARD',\n    onclick: (event) => clearBoard(event, board),\n  };\n  const clearBtn = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', clearBtnAttributes);\n  clearContainer.appendChild(clearBtn);\n  return clearContainer;\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createClearBtn.js?");

/***/ }),

/***/ "./js/views/createContactContainer.js":
/*!********************************************!*\
  !*** ./js/views/createContactContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createContactContainer)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n\n\nfunction createContactContainer(content) {\n  if (!content) return;\n\n  const container = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'contact-container' });\n  const linkAttributes = {\n    innerHTML: '<i class=\"fab fa-github\"></i>',\n    href: 'https://github.com/Gonzagadavid/sudoku',\n  };\n  const link = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('a', linkAttributes);\n  container.appendChild(link);\n  const textAtribttues = {\n    className: 'contact-text',\n    innerHTML: 'by David Gonzaga',\n  };\n  const text = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', textAtribttues);\n  container.appendChild(text);\n  content.appendChild(container);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createContactContainer.js?");

/***/ }),

/***/ "./js/views/createOptionsContainer.js":
/*!********************************************!*\
  !*** ./js/views/createOptionsContainer.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createOptionsContainer)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _renderNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderNumber.js */ \"./js/views/renderNumber.js\");\n/* harmony import */ var _clearNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clearNumber.js */ \"./js/views/clearNumber.js\");\n\n\n\n\nfunction createSpan(number, optionsContainer, element, board) {\n  const spanAttributes = { className: 'number-option', innerHTML: number };\n  const span = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', spanAttributes);\n  span.addEventListener('click', (event) => (0,_renderNumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(event, element, board));\n  optionsContainer.appendChild(span);\n}\n\nfunction createContainer(options, element, board) {\n  const optionsContainer = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'options-container' });\n  options.forEach((number) => createSpan(number, optionsContainer, element, board));\n  return optionsContainer;\n}\n\nfunction createOptionsContainer(element, options, board, y) {\n  const optionsContainer = createContainer(options, element, board);\n  if (y < 3) optionsContainer.classList.add('left');\n  const clearAttributes = { className: 'number-option', innerHTML: 'Limpar' };\n  const cleanNumber = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('span', clearAttributes);\n  cleanNumber.addEventListener('click', (event) => (0,_clearNumber_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(event, element, board));\n  optionsContainer.appendChild(cleanNumber);\n  element.appendChild(optionsContainer);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/createOptionsContainer.js?");

/***/ }),

/***/ "./js/views/finishedContainer.js":
/*!***************************************!*\
  !*** ./js/views/finishedContainer.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ finishedContainer)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n/* harmony import */ var _functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/fetchBoard.js */ \"./js/functions/fetchBoard.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ \"./js/main.js\");\n\n\n\n\nfunction restart(container) {\n  const url = `https://sugoku.herokuapp.com/board?difficulty=${_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].difficulty}`;\n  container.remove();\n  (0,_functions_fetchBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, true);\n}\n\nfunction finishedContainer() {\n  const content = document.getElementById('content');\n  const container = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', { className: 'finished-container' });\n  container.appendChild((0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h2', { innerHTML: 'Finished' }));\n  const text = `Parabéns! Você concluiu no level ${_main_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].difficulty.toUpperCase()}.`;\n  container.appendChild((0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', { innerHTML: text }));\n  const btnAttributes = { innerHTML: 'Jogar novamente', className: 'btn-finished' };\n  const btn = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', btnAttributes);\n  btn.addEventListener('click', () => restart(container));\n  container.appendChild(btn);\n  content.appendChild(container);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/finishedContainer.js?");

/***/ }),

/***/ "./js/views/index.js":
/*!***************************!*\
  !*** ./js/views/index.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _insertTitle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertTitle.js */ \"./js/views/insertTitle.js\");\n/* harmony import */ var _finishedContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finishedContainer.js */ \"./js/views/finishedContainer.js\");\n/* harmony import */ var _renderNumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNumber.js */ \"./js/views/renderNumber.js\");\n/* harmony import */ var _createOptionsContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createOptionsContainer.js */ \"./js/views/createOptionsContainer.js\");\n/* harmony import */ var _createContactContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createContactContainer.js */ \"./js/views/createContactContainer.js\");\n/* harmony import */ var _createBtnContainer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createBtnContainer.js */ \"./js/views/createBtnContainer.js\");\n/* harmony import */ var _createClearBtn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createClearBtn.js */ \"./js/views/createClearBtn.js\");\n/* harmony import */ var _createCardGame_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createCardGame.js */ \"./js/views/createCardGame.js\");\n/* harmony import */ var _clearNumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./clearNumber.js */ \"./js/views/clearNumber.js\");\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  finishedContainer: _finishedContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  clearNumber: _clearNumber_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  createBtnContainer: _createBtnContainer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  createCardGame: _createCardGame_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  createClearBtn: _createClearBtn_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  createContactContainer: _createContactContainer_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  createOptionsContainer: _createOptionsContainer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  insertTitle: _insertTitle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  renderNumber: _renderNumber_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n});\n\n\n//# sourceURL=webpack://sudoku/./js/views/index.js?");

/***/ }),

/***/ "./js/views/insertTitle.js":
/*!*********************************!*\
  !*** ./js/views/insertTitle.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ insertTitle)\n/* harmony export */ });\n/* harmony import */ var _functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/createHtmlElement.js */ \"./js/functions/createHtmlElement.js\");\n\n\nfunction insertTitle(content) {\n  if (!content) return;\n  const title = (0,_functions_createHtmlElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', { innerHTML: 'Sudoku', className: 'title' });\n  content.appendChild(title);\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/insertTitle.js?");

/***/ }),

/***/ "./js/views/renderNumber.js":
/*!**********************************!*\
  !*** ./js/views/renderNumber.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderNumber)\n/* harmony export */ });\n/* harmony import */ var _functions_checkCompleted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/checkCompleted.js */ \"./js/functions/checkCompleted.js\");\n/* harmony import */ var _finishedContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./finishedContainer.js */ \"./js/views/finishedContainer.js\");\n\n\n\nfunction renderNumber(event, element, board) {\n  const x = +element.id.replace(/(x=)|y=\\d/g, '');\n  const y = +element.id.replace(/(y=)|x=\\d/g, '');\n  const value = +event.target.innerHTML;\n  board[x][y] = value;\n  element.innerHTML = value;\n  if ((0,_functions_checkCompleted_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(board)) (0,_finishedContainer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://sudoku/./js/views/renderNumber.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./js/functions/createHtmlElement.js");
/******/ 	__webpack_require__("./js/functions/checkCompleted.js");
/******/ 	__webpack_require__("./js/functions/getOptions.js");
/******/ 	__webpack_require__("./js/functions/btnSelect.js");
/******/ 	__webpack_require__("./js/functions/fetchBoard.js");
/******/ 	__webpack_require__("./js/functions/index.js");
/******/ 	__webpack_require__("./js/functions/renderOptions.js");
/******/ 	__webpack_require__("./js/views/createBtnContainer.js");
/******/ 	__webpack_require__("./js/views/finishedContainer.js");
/******/ 	__webpack_require__("./js/views/clearNumber.js");
/******/ 	__webpack_require__("./js/views/createCardGame.js");
/******/ 	__webpack_require__("./js/views/createClearBtn.js");
/******/ 	__webpack_require__("./js/views/createContactContainer.js");
/******/ 	__webpack_require__("./js/views/createOptionsContainer.js");
/******/ 	__webpack_require__("./js/views/index.js");
/******/ 	__webpack_require__("./js/views/insertTitle.js");
/******/ 	__webpack_require__("./js/views/renderNumber.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;