const userInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

const checkUserInput = input => {
    const originalInput = input;

    if (input === "") {
        alert("Input cannot be empty");
        return;
    }

    const stringInput = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    const text = `<p><strong>${originalInput}</strong>  ${checkForPalindrome(stringInput)
? " is" : " is not"} a palindrome.</p>`;
    resultDiv.innerHTML = text;
    resultDiv.classList.remove("hidden");
}
const checkForPalindrome = stringInput => {
    return stringInput === [...stringInput].reverse().join("");
}

checkBtn.addEventListener("click", () => {
    checkUserInput(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        checkUserInput(userInput.value);
        userInput.value = "";
    }
});