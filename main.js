import './style.css';
function newCard(){
  const main_container = document.createElementByID("main-container");
  newElement,classList.add("card");
  
  const deleteButton = document.createElement("button");
  deleteButton.innerText - "-";
  deleteButton.classList.add("deletebutton");
  newElement.appendChild(deleteButton);
  
  
  const nameHeader = document.createElement("span");
  nameHeader.innertext = "Name: ";
  const nameInput = document.createElement("input");
  newElement.appendChild(nameInput);
  newElement.apendChild(document.createElement("br"));

  const friendWord = document.createElement("span");
  friendWord.innerText = "Friends: ";
  newElement.appendChild(friendListing);

  deleteButton.addEventListener ("click", () => {
      main_container.removeChild(newElement);
  }, false);

  main_container.appendChild(newElement);
    
  
  const friendInput = document.createElement("input");
  newElement.appendChild(friendInput);
  const addFriend = document.createElement("input")
  addFriend.innnertext = "Add as friend";
 
  const friendListing = document.createElement("div");
  friendList.innerText = "Friends: ";
  newElement.appendChild(friendlisting);
  
  const conflictListing = document.createElement ("div");
  newElement.appendChild(conflictlisting);
  conflictList.innerText = "Friends: ";

  addFriend.addEventListener("click", () => {
      friendListing.innerText += ", "
  
  return newElement;
  
}

document.getElementByID("plus").addEventListener("click",() => {
  main_container.appendChild(newCard());
}, false);
