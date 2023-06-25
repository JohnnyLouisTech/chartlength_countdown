var mytext = document.getElementById("Text");
var result = document.getElementById("res");
var limit = 90;

result.textContent = 0 + "/" + limit;

mytext.addEventListener("input", function()
{

var charlength = mytext.value.length;
result.textContent = charlength + "/" + limit;

if (charlength > limit)
{
    result.style.color = "red";
}

else
{
result.style.color = "green";
}

});