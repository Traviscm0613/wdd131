const character = {
  level: 5,
  health: 100,

  attack: function () {
    this.health = this.health - 10;

    if (this.health <= -10) {
    this.health = 0;

    alert("Character Died");
    return;
    }

    renderCharacter();
  },

  levelUp: function () {
    this.level += 1;
    renderCharacter();
  }
};

function renderCharacter() {
  document.querySelector("#level").textContent = character.level;
  document.querySelector("#health").textContent = character.health;
}

renderCharacter();

document.querySelector("#attack").addEventListener("click", function () {
  character.attack();
});

document.querySelector("#levelUp").addEventListener("click", function () {
  character.levelUp();
});

///////////////


/*
for refrence from courses ponder

const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    logo: 'images/js.png',
    sections: [
    { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
    { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
  };
           
document.querySelector('#courseName').textContent = aCourse.name;
document.querySelector('#courseName').textContent = aCourse.code;


function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
*/