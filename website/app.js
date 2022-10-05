/* Global Variables */

const apiKey = "&appid=9915480df1f9ed8ddae55f526b2e138d&units=imperial";

const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";

const generateBtn = document.querySelector("#generate");

const dateEntry = document.querySelector("#date");

const tempEntry = document.querySelector("#temp");

const contentEntry = document.querySelector("#content");

// Create a new date instance dynamically with JS

let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

//Function called by event listener

const getPost = (e) => {
  const zip = document.querySelector("#zip").value;
  const feelingsInput = document.querySelector("#feelings").value;

  getApiData(zip).then((data) => {
    postData("/newData", {
      temperature: data,
      date: newDate,
      userResponse: feelingsInput,
    }).then(updateUI);
  });
};

//Event listener to add function to existing HTML DOM element

generateBtn.addEventListener("click", getPost);

//Function to GET Web API Data

const getApiData = async (zip) => {
  try {
    const res = await fetch(baseUrl + zip + apiKey);
    const response = await res.json();
    const data = response.main.temp;
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Function to POST data

const postData = async (url = "", data = {}) => {
  try {
    const serverResponse = await fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

//Function to GET Project Data

const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const endPointData = await request.json();

    dateEntry.innerHTML = endPointData.date;
    tempEntry.innerHTML = Math.round(endPointData.temperature) + "degrees";
    contentEntry.innerHTML = endPointData.userResponse;
  } catch (error) {
    console.log(error);
  }
};
