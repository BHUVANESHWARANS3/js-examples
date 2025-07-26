function captchaGenerate(){
    let captcha = "";
    const  TEXT = "abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ023456789"
    for(let i=0;i<6;i++){
        let index = Math.floor((Math.random()*60    ));
        captcha = captcha+=TEXT[index];
        console.log(index + " " + TEXT[index]);
    }
    return captcha;
}
let captcha = captchaGenerate();
const container = document.getElementById("captcha-container");
const inputvalue = document.getElementById("captchavalue");
let elem = document.createElement("h1");
elem.textContent=captcha;
elem.style.padding="3%";
elem.style.textAlign="center";
elem.style.color="gray";
elem.style.fontWeight="lighter"
container.prepend(elem);

function checkCaptcha(){
    if(inputvalue.value===captcha){
        alert(window.location.host  + " says You've correctly entered the captcha");
        captcha=captchaGenerate();
        elem.textContent=captcha;
        inputvalue.value="";
    }
    else{
        alert(`${window.location.host} says
CAPTCHA VERIFICATION Failed. Please try again.`)
    }
}
// let arr = [1,2,3,4,5,1,6,2,7,1,3];
// let set = new Set();

// let results = [];
// arr.map(function(item,index,arr){
//     if(set.has(item)===false){
//         set.add(item);
//         results.push(item)
//     }
// });

// let newarr = [];
// // newarr = results;
// console.log(newarr);

/*Interactive  quiz js*/
const quiz = document.getElementById("quiz-container");
const quizsubmit=document.getElementById("quiz-submit");
const q1 = document.getElementsByName("France");
const q2 = document.getElementsByName("Red");
const q3 = document.getElementsByName("mammal");
quizsubmit.addEventListener("click",function(){
    let score  = 0;
    if(q1[0].checked==true)score++;
    if(q2[0].checked==true)score++;
    if(q3[1].checked==true)score++;
    for(let i=1;i<=4;i++)quiz.children[i].style.display="none";
    let h3 = document.createElement("h3");
    h3.style.marginTop="7px";
    h3.textContent="Your Quiz Result";
    let p  = document.createElement("p");
    p.innerHTML="Score:<span style='color:red'>"+score+"</span>";
    p.style.marginTop="7px";
    quiz.append(h3,p)
})

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const shade = document.getElementById("shade-img");
const close = document.querySelector(".shade p");

one.addEventListener("click",function(){
        shade.style.display="block";  
        shade.children[0].src=one.src;
});
two.addEventListener("click",function(){
        shade.style.display="block";  
        shade.children[0].src=two.src;
});
three.addEventListener("click",function(){
        shade.style.display="block";  
        shade.children[0].src=three.src;
});
close.addEventListener("click",function(){
    shade.style.display="none";
});
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
let fetchedData = null; // Declare the variable to store data
function getData(){
try{
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        fetchedData = data; // Store the data

        console.clear();
        const search_value = document.getElementById("search_value");
        const search_title = document.querySelector(".search_title");
        for(let i=0;i<fetchedData.length;i++){
            if(fetchedData[i].title.indexOf(search_value.value)!=-1)
                console.log(fetchedData[i]);
        }
        // Example usage of the stored data:
        // displayData(fetchedData); 
        // processFetchedData(fetchedData);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
}
catch(error){
    alert("error occurred wait few minutes")
}
}
const  search_button = document.getElementById("search_button");
search_button.addEventListener("click",function(){
    getData();  
    alert("check the console")
});



