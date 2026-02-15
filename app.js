function addNote() {
  const title = document.getElementById("note-title").value;
  const text = document.getElementById("note-text").value;

  if (title.trim() === "" && text.trim() === "") {
    alert("Write something before adding!");
    return;
  }

  const noteContainer = document.getElementById("notes-container");

  const note = document.createElement("div");
  note.className = "note";

  const noteTitle = document.createElement("h3");
  noteTitle.innerText = title;

  const noteText = document.createElement("p");
  noteText.innerText = text;

  note.appendChild(noteTitle);
  note.appendChild(noteText);

  noteContainer.appendChild(note);

  // Clear input fields
  document.getElementById("note-title").value = "";
  document.getElementById("note-text").value = "";
}