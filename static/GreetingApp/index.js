document.querySelector(".button1").addEventListener("click", handleSubmitClick);
document.querySelector(".button2").addEventListener("click", handleRandomCards);

function handleSubmitClick()
{
    var name = document.querySelector(".inputName").value;
    var message = document.querySelector(".inputMessage").value;

    if (!name || !message)
    {
        alert("Please enter name and message.")
        return
    }
    var cardObject = document.getElementById("card");
    var element = document.createElement("div");

    styleCard(name, message, element);
    cardObject.appendChild(element);

    document.querySelector(".inputName").value = null;
    document.querySelector(".inputMessage").value = null;
}

function handleRandomCards()
{
    alert("I was clicked")
    var myCardList = []
    for (let index = 1; index < 10; index++) {
        var item = styleCard("Name"+index, "Message"+index, document.createElement("div"));
        myCardList.push(item)
    }
    myCardList.forEach(item => {
        document.getElementById("card").append(item);
    });

    alert("And I reached the end.")
}

function styleCard(name, message, element)
{
    element.style.border = "solid";
    element.style.borderStyle = "groove";
    element.style.borderColor = "gold";
    element.style.borderWidth = "4px";
    element.style.margin = "20px";
    element.style.overflow = "hidden";
    element.style.textAlign = "center";
    element.style.backgroundColor = "#66ffff";
    element.innerHTML = `Welcome ${name} <br><br> ${message}`;
    return element;
}