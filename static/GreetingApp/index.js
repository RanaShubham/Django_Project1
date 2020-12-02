document.querySelector(".button1").addEventListener("click", handleSubmitClick);
document.querySelector(".button2").addEventListener("click", handleRandomCards);

function handleSubmitClick()
{
    var name = document.querySelector(".inputName").value;
    var message = document.querySelector(".inputMessage").value;

    if (!name || !message)
    {
        alert("Please enter name and message.");
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
    console.log("HELLO")
    $(document).ready(function()
    {
        $.get("http://127.0.0.1:8000/card_app", function(data, status)
        {
            var data_arr = JSON.parse(data);
            if (data_arr.length == 0)
            {
                throw 'No data availabe'
            }
            data_arr.forEach(element => 
            {
                var item = makeCard(element["name"], element["message"], document.createElement("div"));
                document.getElementById("card").append(item);
            });
        });
    });
}

function makeCard(name, message, element)
{
    element.style.border = "solid";
    element.style.borderStyle = "groove";
    element.style.borderColor = "gold";
    element.style.borderWidth = "4px";
    element.style.margin = "20px";
    element.style.overflow = "hidden";
    element.style.textAlign = "center";
    element.style.backgroundColor = "#66ffff";
    element.innerHTML = `Welcome: ${name} <br><br> ${message}`;
    return element;
}