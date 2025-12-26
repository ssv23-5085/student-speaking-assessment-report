document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:5000/api/report")
        .then(res => res.json())
        .then(data => {

            // Overall score
            document.getElementById("overall-score").innerText = data.overallScore;

            // Skill scores
            document.getElementById("pronunciation-score").innerText = data.skills.pronunciation + " / 9";
            document.getElementById("fluency-score").innerText = data.skills.fluency + " / 9";
            document.getElementById("vocabulary-score").innerText = data.skills.vocabulary + " / 9";
            document.getElementById("grammar-score").innerText = data.skills.grammar + " / 9";

            // Progress bars
            document.getElementById("pronunciation-bar").style.width = (data.skills.pronunciation / 9) * 100 + "%";
            document.getElementById("fluency-bar").style.width = (data.skills.fluency / 9) * 100 + "%";
            document.getElementById("vocabulary-bar").style.width = (data.skills.vocabulary / 9) * 100 + "%";
            document.getElementById("grammar-bar").style.width = (data.skills.grammar / 9) * 100 + "%";

            // Feedback logic
            let feedbackText = "";
            if (data.overallScore >= 8) {
                feedbackText = "Excellent performance with strong control.";
            } else if (data.overallScore >= 6) {
                feedbackText = "Good performance with minor inaccuracies.";
            } else {
                feedbackText = "Needs improvement.";
            }

            document.getElementById("feedback-text").innerText = feedbackText;
        })
        .catch(err => {
            console.error("Fetch error:", err);
        });
});
