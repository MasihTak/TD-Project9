/* jshint esversion: 6 */
"use strict";
window.onload = function() {

function supportsLocalStorage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch(e){
    return false;
  }
}

  // Check to see if browser support local storage
  if (supportsLocalStorage()) {
    const emailNotification = document.getElementById('emailNotification');
    const publicProfile = document.getElementById('publicProfile');
    const timeZone= document.querySelector('.settings-timezone');
    const saveButton = document.querySelector('#save');
    const cancelButton = document.querySelector('.cancel');

    var loadEmailNotification = localStorage.getItem('emailNotification');
    var loadPublicProfile = localStorage.getItem('publicProfile');
    var loadTimeZone = localStorage.getItem('timeZone');


    var save = function (){
      if(emailNotification.checked === true) {
        localStorage.setItem('emailNotification', true);
      }

      if (publicProfile.checked === true) {
        localStorage.setItem('publicProfile', true);
      }

      if (timeZone.value !== '') {
        localStorage.setItem('timeZone', timeZone.value);
      }
    };

    var load = function () {

      if (loadEmailNotification === 'true') {
        emailNotification.checked = true;
      }
      if (loadPublicProfile === 'true'){
        publicProfile.checked = true;
      }
      if(loadTimeZone !== null) {
        timeZone.value = loadTimeZone;
      }
    };

    var remove = function () {
      if (loadEmailNotification === 'true') {
        localStorage.removeItem('emailNotification');
        emailNotification.checked = false;
      }
      if (loadPublicProfile === 'true') {
        localStorage.removeItem('publicProfile');
        publicProfile.checked = false;
      }
      if (loadTimeZone !== ''){
        localStorage.removeItem('timeZone');
      }
    };

    load();

    saveButton.addEventListener('click', () => {
      save();
    });

    cancelButton.addEventListener('click', () => {
      remove();
    });

  }
};
