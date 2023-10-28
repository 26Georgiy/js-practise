function getSubstring(string, length) {
  return string.slice(0,length);
}

function normalizeInput(input, to) {
 
  if(to === "upper"){
    return input.toUpperCase();
  }else {
    return input.toLowerCase();
  }
}

function checkForName(fullName, firstName) {
  let fN = fullName.toLowerCase();
  let fiN = firstName.toLowerCase();
  if(fN.includes(fiN)){
    return true;
  } else {
    return false;
  }
}

function checkFileExtension(fileName, ext) {
  
 
  if(fileName.endsWith(ext)){
    return `File extension matches`;
  } else {
    return `File extension does not match`;
  }
}

function getFileName(file) {
    if (file.includes(".")) {
    let index = file.indexOf(".");
        console.log(index); 
        let nFile = file.slice(0, index);
        console.log(nFile);
    } else {
        console.log(file) ;
    }
    
}
getFileName("styles.css");
getFileName("index");

//another solution way
function getFileName(file) {
    let index = file.indexOf(".");
    if (index != -1) {
        let nFile = file.slice(0, index);
        console.log(nFile);
    } else {
        console.log(file);
    }
}
getFileName("app");
getFileName("index.html");

function createFileName(name, ext) {
    const trimmedName = name.trim();
    let nName = trimmedName + "." + ext;
    console.log(name, ext);
    console.log(nName);
}
createFileName("  index ", "html");
createFileName(" styles ", "css");