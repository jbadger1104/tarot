// Load saved notes from localStorage on page load
window.onload = function() {
    loadNotes();
  };
  
  // Add a note
  function addNote() {
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value.trim();
  
    if (noteText === "") {
      alert("Please write a note!");
      return;
    }
  
    // Get existing notes from localStorage or initialize an empty array
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    // Add the new note to the notes array
    notes.push(noteText);
  
    // Save the updated notes array back to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));
  
    // Clear the input field
    noteInput.value = "";
  
    // Re-render the notes list
    loadNotes();
  }
  
  // Load and display notes from localStorage
  function loadNotes() {
    const notesList = document.getElementById("notesList");
    notesList.innerHTML = ""; // Clear the existing list
  
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    // Display each note
    notes.forEach((note, index) => {
      const noteDiv = document.createElement("div");
      noteDiv.classList.add("note");
  
      const noteContent = document.createElement("p");
      noteContent.textContent = note;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("deleteBtn");
      deleteBtn.onclick = function() {
        deleteNote(index);
      };
  
      noteDiv.appendChild(noteContent);
      noteDiv.appendChild(deleteBtn);
  
      notesList.appendChild(noteDiv);
    });
  }
  
  // Delete a note
  function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
    // Remove the note by index
    notes.splice(index, 1);
  
    // Save the updated notes array back to localStorage
    localStorage.setItem("notes", JSON.stringify(notes));
  
    // Re-render the notes list
    loadNotes();
  }
  