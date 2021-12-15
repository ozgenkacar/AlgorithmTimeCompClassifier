

const dropdown = document.getElementById("languageOption");
dropdown.onchange = function() {
    let codeInput = document.getElementById("codeInput");
    codeInput.value = "";

}



const getBigOBtn = document.getElementById("getBigOBtn");
getBigOBtn.onclick = function() {
    const codeInput = document.getElementById("codeInput");
    const code = codeInput.value.trim();

 
    const result = parseInput(code);

   
    const resultShow = document.getElementById("resultShow");
    resultShow.innerHTML = result;
}



function parseInput(code) {
    
    let newlineSplit = code.split("\n")
    let forStatements = getForStatements(newlineSplit);
    let result = getBigONotation(forStatements);
    return result;
}

