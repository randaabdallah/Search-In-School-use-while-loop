var school = ["Randa","Ali","Ahmed","Omar","Mahmoud","Seham"];
      var memberIndex = 0;
      while(memberIndex <= school.length-1){
        document.getElementById("displayList").innerHTML +=`${school[memberIndex]} ==`;
        memberIndex++;
      }
     ////////////use continue & while loop///////////////////
    document.getElementById("search").addEventListener("click",function(){
        var name = document.getElementById("student-input").value.toLowerCase();
            var studentIndex = 0;
            while(studentIndex <= school.length-1){
                console.log("school[studentIndex].",school[studentIndex])
                var studentLower = school[studentIndex].toLowerCase();
                studentIndex++ ;
                if(name != studentLower){
                    document.getElementById("result").innerHTML = `${name} is not in the school`;
                    continue;
                }
                else document.getElementById("result").innerHTML = `${name} is in the school`; break;
            }
        document.getElementById("student-input").value = "";   
    })
