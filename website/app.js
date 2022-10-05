/* Global Variables */
const apiKey = "&appid=9915480df1f9ed8ddae55f526b2e138d&units=imperial";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?zip=";



const generateBtn = document.querySelector("#generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();


//----------------------
const getApiData = async (baseUrl, zipInput, apiKey) => {
  const res = await fetch(baseUrl + zipInput + apiKey);

  try {
    const response = await res.json();
    const data = {temperature :data.main.temp}
  } catch (error) {
    console.log(error);
  }
};
//----------------------
const postData = async (url = "", data = {}) => {
    
  const serverResponse = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
//----------------------
const getPost = (e) => {
  const zipInput = document.querySelector("#zip").value;
  const feelingsInput = document.querySelector("#feelings").value;

  getApiData(baseUrl, zipInput, apiKey).then(postData("/newData", data));
};

//----------------------
generateBtn.addEventListener("click", getPost);

/*
const retrieveData = async (url='') =>{ 
    const request = await fetch(url);
    try {
    // Transform into JSON
    const allData = await request.json()
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
  }
  */
