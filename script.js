document.addEventListener("DOMContentLoaded", function() {
    const titleForm = document.getElementById("title-form");
    const titleInput = document.getElementById("title-input");
    const titleList = document.getElementById("title-list");

    titleForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newTitle = titleInput.value;
        if (newTitle) {
            const listItem = document.createElement("li");
            listItem.textContent = newTitle;

            const editButton = document.createElement("button");
            editButton.textContent = "Modifier";
            editButton.classList.add("edit-button");

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Supprimer";
            deleteButton.classList.add("delete-button");

            listItem.appendChild(editButton);
            listItem.appendChild(deleteButton);

            titleList.appendChild(listItem);
            titleInput.value = "";

            // Ajoutez des écouteurs d'événements pour les boutons Modifier et Supprimer
            editButton.addEventListener("click", function() {
                // Code pour la fonction de modification ici
                // Par exemple, vous pouvez afficher une boîte de dialogue de modification.
                const editedTitle = prompt("Modifier le titre :", newTitle);
                if (editedTitle !== null) {
                    listItem.textContent = editedTitle;
                }
            });

            deleteButton.addEventListener("click", function() {
                // Code pour la fonction de suppression ici
                listItem.remove();
            });
        }
    });
});
