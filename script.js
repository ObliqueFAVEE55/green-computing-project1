function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}