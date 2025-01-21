// script.js
document.addEventListener("DOMContentLoaded", () => {
    const completionCheckboxes = document.querySelectorAll(".completion-checkbox");
    const progress = document.querySelector(".progress");
    const percentage = document.getElementById("completion-percentage");

    completionCheckboxes.forEach((checkbox, index) => {
        checkbox.addEventListener("change", () => {
            const completedCount = [...completionCheckboxes].filter(cb => cb.checked).length;
            const totalCount = completionCheckboxes.length;
            const completionPercentage = Math.round((completedCount / totalCount) * 100);
            progress.style.width = `${completionPercentage}%`;
            percentage.textContent = `${completionPercentage}%`;

            // Navigate to next video (if applicable)
            if (checkbox.checked && index + 1 < completionCheckboxes.length) {
                alert("Great! Now moving to the next video.");
            }
        });
    });

    document.getElementById("save-notes").addEventListener("click", () => {
        const notes = document.getElementById("custom-notes").value;
        alert("Notes Saved: " + notes);
    });

    document.getElementById("submit-rating").addEventListener("click", () => {
        const rating = document.getElementById("rating").value;
        if (rating) alert(`Thank you for rating the course: ${rating}/5`);
    });

    document.getElementById("download-certificate").addEventListener("click", () => {
        alert("Certificate Downloaded!");
    });
});
