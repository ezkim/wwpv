let myInput = document.querySelector("input");
let myHeading = document.querySelector("h5");

function readInTension() {
  const myfile = prompt("Please enter your file name.");
  if (!myfile) {
    readInTension();
  } else {
    localStorage.setItem("filename", myfile);
    myHeading.textContent = `Winding Tension Data from ${myfile}`;
  }
}

if (!localStorage.getItem("filename")) {
  readInTension();
} else {
  const storedFilename = localStorage.getItem("filename");
  myHeading.textContent = `Winding Tension Data from ${storedFilename}`;
}

myInput.onclick = () => {
  readInTension();
};
