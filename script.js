function answer(choice) {
  const result = document.getElementById("result");

  if (choice === "me") {
    result.innerHTML = "Correct 😌 but we both fell hard ❤️";
  } else {
    result.innerHTML = "Maybe 😉 but I love you more ❤️";
  }
}
