// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

let numberOfCookies = 0


if (localStorage.getItem("savedCookies")) {
  numberOfCookies = parseInt(localStorage.getItem("savedCookies"))
  document.getElementById("answer").innerHTML =
    "<p> You previously had " + numberOfCookies + " cookies.</p>"
} else {
  document.getElementById("answer").innerHTML =
    "<p>You have no cookies right now! Click the button to get as many as you want!</p>"
}

function myButtonClicked() {
  numberOfCookies = numberOfCookies + 1
  localStorage.setItem("savedCookies", numberOfCookies)
  document.getElementById("answer").innerHTML =
    "<p>You have " + numberOfCookies + " Cookies</p>"
}
