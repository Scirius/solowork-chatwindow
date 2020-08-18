const submitBtn = document.querySelector("form input[type=submit]");
const inputField = document.querySelector("form input[type=text]");

class MyChat {
  constructor() {
    console.log("Created a new chat window.");
  }
  addMessage(message, me = true) {
    const template = `<div class="message">
        <div class="${
          me ? "myMessage" : "fromThem"
        }" data-date="${new Date().toLocaleTimeString()}">
          <p>${message}</p>
          <date> ${new Date().toLocaleTimeString()} </date>
        </div>
      </div>`;
    document.querySelector(".chat .messages").innerHTML += template;
  }

  typing() {
    document.querySelector(".typing").classList.toggle("active");
    setTimeout(() => {
      document.querySelector(".typing").classList.toggle("active");
    }, 1000);
  }
  /**
   * Listen to the submit of the form and add a new message
   * with addMessage()
   */
  submitMsg(evt) {
    evt.preventDefault();
    if (inputField.value !== "") {
      console.log(`Submitted: ${inputField.value}`);
      this.addMessage(inputField.value, true);
      this.addAlerts();
    }
  }
  /**
   * Listen to the click on each message and create an alert
   * with the date from 'data-date'
   * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
   */

  alertMsg(evt) {
    alert("Message has been added at: " + evt.target.dataset.date);
  }
  // I used css fix to make elements inside .message unclickable
  // .myMessage > *, .fromThem > * {pointer-events: none;}
  // otherwise I get different evt.target for inside elements
  addAlerts() {
    document
      .querySelectorAll(".myMessage, .fromThem")
      .forEach((msg) => msg.addEventListener("click", this.alertMsg));
  }
  start() {
    this.typing();
    this.addMessage("Hi!", false);
    this.addMessage("In this exercise you will work with events in JS", false);
    this.addMessage("Let's go!");
    submitBtn.addEventListener("click", (evt) => {
      this.submitMsg(evt);
    });
    this.addAlerts();
  }
}

let myChat = new MyChat();
myChat.start();

/**
 * Listen to every keypress (from the keyboard) in the input and call
 * the function typing()
 */
/*function showTyping(evt) {
  typing();
}

inputField.addEventListener("keyup", showTyping);*/

// Create a class for the chat
// Add the function you already coded as methods for this class
// Add a method to delete the last message
// Add a button to delete the last message, next to the send button for example
// Listen to the press, and execute the delete
