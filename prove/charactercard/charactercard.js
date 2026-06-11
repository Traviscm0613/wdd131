const character = {
  sections: [
    {
      level: 5,
      health: 100
    }
  ]
};

function sectionTemplate(sections) {
  return `
    <tr>
      <td>${sections.level}</td>
      <td>${sections.health}</td>
    </tr>
  `;
}

function renderSections(sections) {
  document.querySelector("#sections").innerHTML =
    sections.map(sectionTemplate).join("");
}

renderSections(character.sections);

const character = {
    
    sections: [
    {
      level: 5,
      health: 100
    }
  ],
    attack: function (level) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.level == level
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
      }
  };
           
function sectionTemplate(section) {
    return `<tr>
      <td>${section.level}</td>
      <td>${section.health}</td>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const level = document.querySelector("#level").value;
    aCourse.enrollStudent(level);
});
        