let store = {teachers: []}

class Teacher {
  constructor(name, hometown) {
    this.name = name;
    this.hometown = hometown;
    store.teachers.push(this);
  }
}

function createTeacher() {
  event.preventDefault()
  let name = $("#name").val()
  let hometown = $("#hometown").val()
  new Teacher(name, hometown)
  let list = $("ul")
  list.append(`<li>name: ${name} hometown: ${hometown}</li>`)
}
