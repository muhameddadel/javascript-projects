// let input = document.querySelector(".input");
// let sub = document.querySelector(".add");
// let tasks = document.querySelector(".tasks");

// let arrTask = [];

// if (localStorage.getItem("tasts")) {
//   arrTask = JSON.parse(localStorage.getItem("tasts"));
// }

// getDataFromLS();

// sub.onclick = function () {
//   if (input.value !== "") {
//     addTask(input.value);
//     input.value = "";
//   }
// };

// tasks.addEventListener("click", (el) => {
//   if (el.target.classList.contains("delete")) {
//     deleteTaskFromLS(el.target.parentElement.getAttribute("data-id"));
//     el.target.parentElement.remove();
//   }
//   if (el.target.classList.contains("task")) {
//     toggleStatus(el.target.getAttribute("data-id"));
//     el.target.classList.toggle("done");
//   }
// });
// function addTask(taskEle) {
//   const task = {
//     id: Date.now(),
//     title: taskEle,
//     completed: false,
//   };
//   arrTask.push(task);
//   addTaskToPage(arrTask);
//   addDataToLS(arrTask);
// }
// function addTaskToPage(arrTask) {
//   tasks.innerHTML = "";

//   arrTask.forEach((task) => {
//     let div = document.createElement("div");
//     div.className = "task";
//     if (task.completed) {
//       div.className = "task done";
//     }
//     div.setAttribute("data-id", task.id);
//     div.appendChild(document.createTextNode(task.title));

//     let span = document.createElement("span");
//     span.className = "delete";
//     span.appendChild(document.createTextNode("X"));
//     div.appendChild(span);
//     tasks.appendChild(div);
//   });
// }
// function addDataToLS(arrTask) {
//   window.localStorage.setItem("tasks", JSON.stringify(arrTask));
// }
// function getDataFromLS() {
//   let data = window.localStorage.getItem("tasks");
//   if (data) {
//     let tasts = JSON.parse(data);
//     addTaskToPage(tasts);
//   }
// }

// function deleteTaskFromLS(taskId) {
//   arrTask = arrTask.filter((task) => task.id != taskId);
//   addDataToLS(arrTask);
// }
// function toggleStatus(taskId) {
//   for (let i = 0; i < arrTask.length; i++) {
//     if (arrTask[i].id == taskId) {
//       arrTask[i].completed == false
//         ? (arrTask[i].completed = true)
//         : (arrTask[i].completed = false);
//     }
//   }
//   addDataToLS(arrTask);
// }
let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("tasks")) {
  arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function () {
  if (input.value !== "") {
    addTaskToArray(input.value); // Add Task To Array Of Tasks
    input.value = ""; // Empty Input Field
  }
};

// Click On Task Element
tasksDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }
  // Task Element
  if (e.target.classList.contains("task")) {
    // Toggle Completed For The Task
    toggleStatusTaskWith(e.target.getAttribute("data-id"));
    // Toggle Done Class
    e.target.classList.toggle("done");
  }
});

function addTaskToArray(taskText) {
  // Task Data
  const task = {
    id: Date.now(),
    title: taskText,
    completed: false,
  };
  // Push Task To Array Of Tasks
  arrayOfTasks.push(task);
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfTasks);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) {
  // Empty Tasks Div
  tasksDiv.innerHTML = "";
  // Looping On Array Of Tasks
  arrayOfTasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To Main Div
    div.appendChild(span);
    // Add Task Div To Tasks Container
    tasksDiv.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
  window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addElementsToPageFrom(tasks);
  }
}

function deleteTaskWith(taskId) {
  // For Explain Only
  // for (let i = 0; i < arrayOfTasks.length; i++) {
  //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
  // }
  arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
  addDataToLocalStorageFrom(arrayOfTasks);
}

function toggleStatusTaskWith(taskId) {
  for (let i = 0; i < arrayOfTasks.length; i++) {
    if (arrayOfTasks[i].id == taskId) {
      arrayOfTasks[i].completed == false
        ? (arrayOfTasks[i].completed = true)
        : (arrayOfTasks[i].completed = false);
    }
  }
  addDataToLocalStorageFrom(arrayOfTasks);
}
