function showSection(section) {
    let sections = [
        "TimelineContent",
        "TasksContent",
        "GoalsContent",
        "NotesContent",
        "FilesContent",
    ];

    // Hide all sections
    sections.forEach(function (s) {
        let element = document.querySelector("." + s);
        if (element) {
            element.style.display = "none";
        }
    });

    // Show the selected section
    let selectedElement = document.querySelector("." + section);
    if (selectedElement) {
        selectedElement.style.display = "block";
    }
}







