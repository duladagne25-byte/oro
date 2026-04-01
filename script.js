// Dummy data
let users = [
  { name: "Student A", email: "studenta@example.com", level: "Beginner" },
  { name: "Student B", email: "studentb@example.com", level: "Intermediate" }
];

let courses = ["Math Basics", "Web Development"];
let materials = [];

// Load Overview
function updateOverview() {
  document.getElementById("userCount").textContent = users.length;
  document.getElementById("courseCount").textContent = courses.length;
  document.getElementById("materialCount").textContent = materials.length;
}

// Load Users
function loadUsers() {
  const table = document.getElementById("userTable");
  table.innerHTML = "";
  users.forEach(user => {
    const row = `<tr><td>${user.name}</td><td>${user.email}</td><td>${user.level}</td></tr>`;
    table.innerHTML += row;
  });
}

// Load Courses
function loadCourses() {
  const list = document.getElementById("courseList");
  list.innerHTML = "";
  courses.forEach(course => {
    list.innerHTML += `<li>${course}</li>`;
  });
}

// Load Materials
function loadMaterials() {
  const list = document.getElementById("materialList");
  list.innerHTML = "";
  materials.forEach(material => {
    list.innerHTML += `<li>${material}</li>`;
  });
}

// Add Course
document.getElementById("courseForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const courseName = this.querySelector("input").value;
  courses.push(courseName);
  loadCourses();
  updateOverview();
  this.reset();
});

// Upload Material
document.getElementById("materialForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const file = document.getElementById("materialUpload").files[0];
  if (file) {
    materials.push(file.name);
    loadMaterials();
    updateOverview();
    alert(`Material "${file.name}" uploaded successfully!`);
  }
});

// Initialize
updateOverview();
loadUsers();
loadCourses();
loadMaterials();
