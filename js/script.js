// Copyright (c) 2020 Mr. Coxall All rights reserved
// 
// Created by: Benjamin Abebe
// Created on: Feb 2025
// This file contains the JS functions for index.html

"use strict"

let numberOfCookies = 0
document.getElementById("answer").innerHTML = "<p>You have no cookies right now! Click the button to get as many as you want!</p>"

function myButtonClicked() {
  numberOfCookies = numberOfCookies + 1
  document.getElementById("answer").innerHTML = "<p>You have " + numberOfCookies + " Cookies</p>"
}

