// write js code here corresponding to index.html
// You should add submit event on the form

var button=document.querySelector("#submit");

button.addEventListener("submit",data)
  

        var data={};
        event.preventDefault();

         data={
            match:form.matchNum.value,
            teamA:form.teamA.value,
            teamB:form.teamB.value,
            date:form.date.value,
            venue:form.venue.value

        }

        localStorage.setItem("schedule",JSON.stringify(data));



    
    
    console.log(data)
