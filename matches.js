// write js code here corresponding to matches.html

// var filter=document.createElement("select")


// filter.options.innerText=none;
// filter.options.innerText=Mumbai
// filter.options.innerText=Banglore
// filter.options.innerText=Hyderabad

// filter.options.innerText=Delhi

// filter.options.innerText=Pune
// document.querySelector("#navbar").append(filter);



var matchData=JSON.parse(localStorage.getItem("schedule"))


function display(){
    var body=document.querySelector('tbody');

    var row=document.createElement("tr")

    var td1=document.createElement("td")
    var td2=document.createElement("td")
    var td3=document.createElement("td")
    var td4=document.createElement("td")
    var td5=document.createElement("td")
    var td6=document.createElement("td")

    td1.innerText=matchData.matchNum.value;
    td2.innerText=matchData.teamA.value;
    td3.innerText=matchData.teamB.value;
    td4.innerText=matchData.date.value;
    td5.innerText=matchData.venue.value;

    td6.innertext="Favourite";

    td6.addEventListener("click",event)
    function store(){
        localStorage.setItem("favourites",JSON.springify(tr))
    }

        event.preventDefault();
    

    tr.append(td1,td2,td3,td4,td5,td6);
    body.appent(tr);

    


}