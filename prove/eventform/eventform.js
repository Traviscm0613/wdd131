
const form = document.querySelector("#eventForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");


function updateNotesField() {
  const value = travelRange.value;

  // Show the travel notes on the form if they are choosing many campuses and require it
  if (value === 'student') {
    notesContainer.hidden = false;
    notes.required = true;
  }
  else {
    notesContainer.hidden = true;
    notes.required = false; 
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}



form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const note = form.notes.value.trim();

  // Let the user know if they choose many campuses but didn't put a note that they need to add a note
  if (type == 'student' && note.length !== 9) {
    output.textContent = 'Student I# must be 9 digits';
    return
  }
  
  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }


  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>${type}</p>
  <p>Availability: ${availableDate}</p>
  `;

  form.reset();
  updateNotesField();
});
          