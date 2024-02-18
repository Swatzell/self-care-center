var affirmationButton = document.querySelector("#affirmation");
var mantraButton = document.querySelector("#mantra");
var recieveMessageButton = document.querySelector(".receive-message")
var messageBox = document.querySelector(".message-box");
var deleteMessageButton = document.querySelector(".delete-message");
var confirmationMessage = document.querySelector(".confirmation-message");




var affirmations = [' I forgive myself and set myself free', ' I believe I can be all that I want to be', ' I am in the process of becoming the best version of myself', ' I have the freedom & power to create the life I desire', ' I choose to be kind to myself and love myself unconditionally', ' My possibilities are endless', ' I am worthy of my dreams', ' I am enough', ' I deserve to be healthy and feel good', 'I  am full of energy and vitality and my mind is calm and peaceful', ' Every day I am getting healthier and stronger', ' I honor my body by trusting the signals that it sends me', ' I manifest perfect health by making smart choices']

var mantras = ['I am the sky, the rest is weather', ' Onward and upward', ' The only constant is change', ' Yesterday is not today', ' This too shall pass', ' Breathing in, I send myself love', ' Breathing out, I send love to someone else who needs it', ' Don’t let yesterday take up too much of today', ' Every day is a second chance', ' Tell the truth and love everyone', ' I am free from sadness', ' I am enough', ' In the beginning it is you, in the middle it is you and in the end it is you', ' I love myself', ' I am present now', ' Inhale the future, exhale the past']


  // Create a delete button and add an event listener to it
//   var deleteButton = document.createElement('button');
//   deleteButton.className = 'delete-message';
//   deleteButton.textContent = 'Delete this message';
//   deleteButton.addEventListener('click', function() {
//     // Remove the message and show a confirmation
//     messageBox.innerHTML = '';
//     alert('The message has been removed.');
//   });

//   // Display the message along with the delete button
//   messageBox.innerHTML = message + ' ' + deleteButton.outerHTML;
// }





recieveMessageButton.addEventListener('click', showResult)
deleteMessageButton.addEventListener('click', messageBoxHandler)
// function() {
//  confirmationMessage.innerHTML = 'Congrats! The message has been removed';
// });

function messageBoxHandler(){
  // document.querySelector(".meditating").classList.add("hidden");
  confirmationMessage.innerHTML = 'Congrats! The message has been removed'


}


function random(messages){
 var randomMessageIndex =  Math.floor(Math.random() * messages.length);
 var randomMessage = messages[randomMessageIndex]

return randomMessage
 }
function showResult(){
  if(affirmationButton.checked){
    var randomAffirmation = random(affirmations);
    confirmationMessage.innerHTML = `${randomAffirmation}`
  } 
  else if(mantraButton.checked){
     var randomMantra = random(mantras)
     confirmationMessage.innerHTML = `${randomMantra}`
  }
  document.querySelector(".meditating").classList.add("hidden")
}
