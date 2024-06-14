let addBtn = document.querySelector("#addBtn")
let main = document.querySelector("#main")

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes)
    const data = [];
    notes.forEach((note) => {
        data.push(note.value)
    })
    // console.log(data)
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}


addBtn.addEventListener("click", function (event) {
    addNote()
});



{/* <div class="note">
<div class="tool">
    <i class="fa-solid fa-floppy-disk"></i>
    <i class="fa-solid fa-delete-left"></i>
</div>
<textarea></textarea>
</div> */}

const addNote = (text = "") => {
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-delete-left"></i>
    </div>
    <textarea>${text}</textarea>
    `
    note.querySelector(".trash").addEventListener("click", function () {
        note.remove()
        saveNotes()
    })//16:00

    note.querySelector(".save").addEventListener("click", function () {
        saveNotes()
    })

    note.querySelector("textarea").addEventListener("focusout", function(){
        saveNotes();
    })
    main.appendChild(note);
    saveNotes()
}

// 20:00


(
    function () {
        // const lsNotes = localStorage.getItem("notes");
        const lsNotes = JSON.parse(localStorage.getItem("notes"));

        // console.log(lsNotes)
        // lsNotes.forEach((lsNotes) => {
        //     addNote(lsNotes)
        // })
        // if(lsNotes.length === 0){
        //    localStorage.removeItem("notes")
        // }else{
        //     addNote()
        // }


        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach((lsNotes) => {
                addNote(lsNotes)
            })
        }
    }
)()