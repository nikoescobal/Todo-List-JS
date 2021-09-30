/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/modifyTodo.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStorageAndReloadPage": () => (/* binding */ setStorageAndReloadPage),
/* harmony export */   "handleChecks": () => (/* binding */ handleChecks),
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "deleteTodo": () => (/* binding */ deleteTodo),
/* harmony export */   "editTodo": () => (/* binding */ editTodo),
/* harmony export */   "clearCompletedTodos": () => (/* binding */ clearCompletedTodos)
/* harmony export */ });
const setStorageAndReloadPage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
  window.location.reload();
};

const handleChecks = (list, listOfTodoElement) => {
  listOfTodoElement.forEach((element) => {
    const checkInputField = element.children[0].children[0];
    const descriptionTag = element.children[0].children[1];

    checkInputField.addEventListener('change', () => {
      if (checkInputField.checked) {
        descriptionTag.classList.add('isChecked');
        list.forEach((task) => {
          const matchedIndex = task.index === Number(checkInputField.value);
          if (matchedIndex) {
            task.completed = true;
            checkInputField.checked = true;
            localStorage.setItem('todos', JSON.stringify(list));
          }
        });
      } else {
        descriptionTag.classList.remove('isChecked');
        list.forEach((task) => {
          const matchedIndex = task.index === Number(checkInputField.value);
          if (matchedIndex) {
            task.completed = false;
            localStorage.setItem('todos', JSON.stringify(list));
          }
        });
      }
    });
  });
};

const addTodo = (todosFromLocalStorage) => {
  const data = { index: 1, description: '', completed: false };
  const inputField = document.querySelector('#new-todo');
  const addBtn = document.querySelector('.add-btn');

  inputField.addEventListener('change', (event) => {
    data.description = event.target.value;
  });

  addBtn.addEventListener('click', () => {
    todosFromLocalStorage.push(data);
    todosFromLocalStorage[todosFromLocalStorage.length - 1].index = todosFromLocalStorage.length;
    setStorageAndReloadPage(todosFromLocalStorage);
  });
};

const deleteTodo = (todosFromLocalStorage) => {
  const deleteIcons = document.querySelectorAll('.delete-todo');
  let listOfTodos = [];
  deleteIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const todoId = Number(icon.parentElement.id);
      todosFromLocalStorage.forEach((todo) => {
        if (todoId === todo.index) {
          listOfTodos = todosFromLocalStorage.filter(
            (todo) => todo.index !== todoId,
          );
        }
      });
      listOfTodos.forEach((todo, index) => {
        todo.index = index + 1;
      });
      setStorageAndReloadPage(listOfTodos);
    });
  });
};

const editTodo = (todosFromLocalStorage) => {
  const editIcons = document.querySelectorAll('.edit-todo');

  editIcons.forEach((editIcon) => {
    editIcon.addEventListener('click', () => {
      const editInputField = editIcon.parentElement;
      const deleteIcon = editIcon.parentElement.children[1];
      const todoId = Number(editIcon.parentElement.id);

      editIcon.classList.add('inActive');
      deleteIcon.classList.remove('inActive');
      todosFromLocalStorage.forEach((todo, index) => {
        if (todoId === todo.index) {
          const inputField = editInputField.parentElement.children[0].lastElementChild;
          inputField.readOnly = false;
          inputField.addEventListener('keyup', (event) => {
            todo.description = event.target.value;
            todosFromLocalStorage.splice(index, 1, todo);
            localStorage.setItem(
              'todos',
              JSON.stringify(todosFromLocalStorage),
            );
            if (event.key === 'Enter') {
              window.location.reload();
            }
          });
        }
      });
    });
  });
};

const clearCompletedTodos = (todosFromLocalStorage) => {
  const clearBtn = document.querySelector('.clear-btn');
  clearBtn.addEventListener('click', () => {
    todosFromLocalStorage.forEach((todo) => {
      if (todo.completed) {
        const newTodoList = todosFromLocalStorage.filter(
          (todo) => !todo.completed,
        );
        newTodoList.forEach((todo, index) => {
          todo.index = index + 1;
        });
        setStorageAndReloadPage(newTodoList);
      }
    });
  });
};

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kaWZ5VG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRU87QUFDUCxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ub2RvLUxpc3QtSlMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vVG9kby1MaXN0LUpTL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9Ub2RvLUxpc3QtSlMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ub2RvLUxpc3QtSlMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Ub2RvLUxpc3QtSlMvLi9zcmMvbW9kaWZ5VG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBjb25zdCBzZXRTdG9yYWdlQW5kUmVsb2FkUGFnZSA9ICh0b2RvcykgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlQ2hlY2tzID0gKGxpc3QsIGxpc3RPZlRvZG9FbGVtZW50KSA9PiB7XG4gIGxpc3RPZlRvZG9FbGVtZW50LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBjaGVja0lucHV0RmllbGQgPSBlbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uVGFnID0gZWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblsxXTtcblxuICAgIGNoZWNrSW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAoY2hlY2tJbnB1dEZpZWxkLmNoZWNrZWQpIHtcbiAgICAgICAgZGVzY3JpcHRpb25UYWcuY2xhc3NMaXN0LmFkZCgnaXNDaGVja2VkJyk7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZWRJbmRleCA9IHRhc2suaW5kZXggPT09IE51bWJlcihjaGVja0lucHV0RmllbGQudmFsdWUpO1xuICAgICAgICAgIGlmIChtYXRjaGVkSW5kZXgpIHtcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNoZWNrSW5wdXRGaWVsZC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVzY3JpcHRpb25UYWcuY2xhc3NMaXN0LnJlbW92ZSgnaXNDaGVja2VkJyk7XG4gICAgICAgIGxpc3QuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZWRJbmRleCA9IHRhc2suaW5kZXggPT09IE51bWJlcihjaGVja0lucHV0RmllbGQudmFsdWUpO1xuICAgICAgICAgIGlmIChtYXRjaGVkSW5kZXgpIHtcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShsaXN0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVG9kbyA9ICh0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UpID0+IHtcbiAgY29uc3QgZGF0YSA9IHsgaW5kZXg6IDEsIGRlc2NyaXB0aW9uOiAnJywgY29tcGxldGVkOiBmYWxzZSB9O1xuICBjb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy10b2RvJyk7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuJyk7XG5cbiAgaW5wdXRGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgICBkYXRhLmRlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICB9KTtcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb3NGcm9tTG9jYWxTdG9yYWdlLnB1c2goZGF0YSk7XG4gICAgdG9kb3NGcm9tTG9jYWxTdG9yYWdlW3RvZG9zRnJvbUxvY2FsU3RvcmFnZS5sZW5ndGggLSAxXS5pbmRleCA9IHRvZG9zRnJvbUxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgc2V0U3RvcmFnZUFuZFJlbG9hZFBhZ2UodG9kb3NGcm9tTG9jYWxTdG9yYWdlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UpID0+IHtcbiAgY29uc3QgZGVsZXRlSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlLXRvZG8nKTtcbiAgbGV0IGxpc3RPZlRvZG9zID0gW107XG4gIGRlbGV0ZUljb25zLmZvckVhY2goKGljb24pID0+IHtcbiAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgdG9kb0lkID0gTnVtYmVyKGljb24ucGFyZW50RWxlbWVudC5pZCk7XG4gICAgICB0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICBpZiAodG9kb0lkID09PSB0b2RvLmluZGV4KSB7XG4gICAgICAgICAgbGlzdE9mVG9kb3MgPSB0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UuZmlsdGVyKFxuICAgICAgICAgICAgKHRvZG8pID0+IHRvZG8uaW5kZXggIT09IHRvZG9JZCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxpc3RPZlRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIHRvZG8uaW5kZXggPSBpbmRleCArIDE7XG4gICAgICB9KTtcbiAgICAgIHNldFN0b3JhZ2VBbmRSZWxvYWRQYWdlKGxpc3RPZlRvZG9zKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFRvZG8gPSAodG9kb3NGcm9tTG9jYWxTdG9yYWdlKSA9PiB7XG4gIGNvbnN0IGVkaXRJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LXRvZG8nKTtcblxuICBlZGl0SWNvbnMuZm9yRWFjaCgoZWRpdEljb24pID0+IHtcbiAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGVkaXRJbnB1dEZpZWxkID0gZWRpdEljb24ucGFyZW50RWxlbWVudDtcbiAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBlZGl0SWNvbi5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzFdO1xuICAgICAgY29uc3QgdG9kb0lkID0gTnVtYmVyKGVkaXRJY29uLnBhcmVudEVsZW1lbnQuaWQpO1xuXG4gICAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdpbkFjdGl2ZScpO1xuICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdpbkFjdGl2ZScpO1xuICAgICAgdG9kb3NGcm9tTG9jYWxTdG9yYWdlLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICh0b2RvSWQgPT09IHRvZG8uaW5kZXgpIHtcbiAgICAgICAgICBjb25zdCBpbnB1dEZpZWxkID0gZWRpdElucHV0RmllbGQucGFyZW50RWxlbWVudC5jaGlsZHJlblswXS5sYXN0RWxlbWVudENoaWxkO1xuICAgICAgICAgIGlucHV0RmllbGQucmVhZE9ubHkgPSBmYWxzZTtcbiAgICAgICAgICBpbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0b2RvLmRlc2NyaXB0aW9uID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgdG9kb3NGcm9tTG9jYWxTdG9yYWdlLnNwbGljZShpbmRleCwgMSwgdG9kbyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgJ3RvZG9zJyxcbiAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodG9kb3NGcm9tTG9jYWxTdG9yYWdlKSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyQ29tcGxldGVkVG9kb3MgPSAodG9kb3NGcm9tTG9jYWxTdG9yYWdlKSA9PiB7XG4gIGNvbnN0IGNsZWFyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyLWJ0bicpO1xuICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2Rvc0Zyb21Mb2NhbFN0b3JhZ2UuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uY29tcGxldGVkKSB7XG4gICAgICAgIGNvbnN0IG5ld1RvZG9MaXN0ID0gdG9kb3NGcm9tTG9jYWxTdG9yYWdlLmZpbHRlcihcbiAgICAgICAgICAodG9kbykgPT4gIXRvZG8uY29tcGxldGVkLFxuICAgICAgICApO1xuICAgICAgICBuZXdUb2RvTGlzdC5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHRvZG8uaW5kZXggPSBpbmRleCArIDE7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRTdG9yYWdlQW5kUmVsb2FkUGFnZShuZXdUb2RvTGlzdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==