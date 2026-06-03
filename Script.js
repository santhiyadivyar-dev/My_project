let students = JSON.parse(localStorage.getItem("students")) || [];

displayStudents();

function addStudent(){

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let email = document.getElementById("email").value;

    if(name=="" || course=="" || email==""){
        alert("Fill all fields");
        return;
    }

    students.push({
        name:name,
        course:course,
        email:email
    });

    localStorage.setItem("students",
    JSON.stringify(students));

    document.getElementById("name").value="";
    document.getElementById("course").value="";
    document.getElementById("email").value="";

    displayStudents();
}

function displayStudents(){

    let output="";

    students.forEach((student,index)=>{

        output += `
        <div class="student-card">
            <h3>${student.name}</h3>
            <p>${student.course}</p>
            <p>${student.email}</p>

            <button class="edit"
            onclick="editStudent(${index})">
            Edit
            </button>

            <button class="delete"
            onclick="deleteStudent(${index})">
            Delete
            </button>
        </div>
        `;
    });

    document.getElementById("studentList").innerHTML = output;
}

function deleteStudent(index){

    students.splice(index,1);

    localStorage.setItem("students",
    JSON.stringify(students));

    displayStudents();
}

function editStudent(index){

    let student = students[index];

    document.getElementById("name").value =
    student.name;

    document.getElementById("course").value =
    student.course;

    document.getElementById("email").value =
    student.email;

    students.splice(index,1);

    localStorage.setItem("students",
    JSON.stringify(students));

    displayStudents();
}

document.getElementById("search")
.addEventListener("keyup",function(){

    let value = this.value.toLowerCase();

    let cards =
    document.querySelectorAll(".student-card");

    cards.forEach(card=>{

        if(card.innerText.toLowerCase()
        .includes(value)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
});

document.getElementById("darkBtn")
.addEventListener("click",()=>{

    document.body.classList.toggle("dark");
});
