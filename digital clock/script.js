let SFP = document.getElementById("S-F-P");
let SSP = document.getElementById("S-S-P");
let MFP = document.getElementById("M-F-P");
let MSP = document.getElementById("M-S-P");
let HFP = document.getElementById("H-F-P");
let HSP = document.getElementById("H-S-P");
let form = document.getElementById("form");
let Hours = document.getElementById("hours");
let Minutes = document.getElementById("minutes");
let SubmitBTN = document.getElementById("submit");
let Edit = document.getElementById("edit");
let EditBox = document.querySelector(".edit-box");
let CloseEditBox = document.getElementById("close-edit-box");


function submit(e) {
  e.preventDefault();
}
form.addEventListener("submit", submit);

SubmitBTN.onclick = function () {
  EditBox.classList.toggle("hidden");
  Edit.classList.toggle("hidden");

  // Seconds

  setInterval(function () {
    if (Number(SFP.innerHTML) < 9) {
      SFP.innerHTML = Number(SFP.innerHTML) + 1;
    } else {
      SFP.innerHTML = 0;
    }
  }, 1000);

  setInterval(function () {
    if (Number(SSP.innerHTML) < 5) {
      SSP.innerHTML = Number(SSP.innerHTML) + 1;
    } else {
      SSP.innerHTML = 0;
    }
  }, 10000);

  // Minutes

  setInterval(function () {
    if (Number(MFP.innerHTML) < 9) {
      MFP.innerHTML = Number(MFP.innerHTML) + 1;
    } else {
      MFP.innerHTML = 0;
    }
  }, 60000);

  setInterval(function () {
    if (Number(MSP.innerHTML) < 5) {
      MSP.innerHTML = Number(MSP.innerHTML) + 1;
    } else {
      MSP.innerHTML = 0;
    }
  }, 600000);

  let MinputValue = Minutes.value;
  MSP.innerHTML = MinputValue.slice(0, 1);
  MFP.innerHTML = MinputValue.slice(1, 2);
  if (MinputValue === "") {
    MSP.innerHTML = 0;
    MFP.innerHTML = 0;
  }

  // Hours

  setInterval(function () {
    if (Number(HFP.innerHTML) < 9) {
      HFP.innerHTML = Number(HFP.innerHTML) + 1;
    } else {
      HFP.innerHTML = 0;
    }
  }, 3600000);

  setInterval(function () {
    if (Number(HSP.innerHTML) < 2) {
      HSP.innerHTML = Number(HSP.innerHTML) + 1;
    }
  }, 36000000);

  let HinputValue = Hours.value;
  HSP.innerHTML = HinputValue.slice(0, 1);
  HFP.innerHTML = HinputValue.slice(1, 2);
  if (HinputValue === "") {
    HSP.innerHTML = 0;
    HFP.innerHTML = 0;
  }

  // Reset

  if (Number(HSP.innerHTML) === 2 && Number(HFP.innerHTML) > 3) {
    SFP.innerHTML = 0;
    SSP.innerHTML = 0;
    MFP.innerHTML = 0;
    MSP.innerHTML = 0;
    HFP.innerHTML = 0;
    HSP.innerHTML = 0;
  }
};

EditBox.classList.toggle("hidden");
Edit.onclick = function () {
  EditBox.classList.toggle("hidden");
  Edit.classList.toggle("hidden");
};
CloseEditBox.onclick = function () {
  EditBox.classList.toggle("hidden");
  Edit.classList.toggle("hidden");
};
