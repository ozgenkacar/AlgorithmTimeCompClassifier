



const getBigOBtn = document.getElementById("getBigOBtn");
getBigOBtn.onclick = function() {
    const codeInput = document.getElementById("codeInput");
    const code = codeInput.value.trim();

    // now parse the text
    const result = parseInput(code);

    // set the result
    const resultShow = document.getElementById("resultShow");
    resultShow.innerHTML = result;
}

function parseInput(code) {
    // get the for statement
    let newlineSplit = code.split("\n")
    let forStatements = getForStatements(newlineSplit);
    let result = getBigONotation(forStatements);
    return result;
}

const dropdown = document.getElementById("languageOption");
dropdown.onchange = function() {
    let codeInput = document.getElementById("codeInput");
    codeInput.value = "";

}
