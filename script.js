const data = [
    { name: "jane", age: 27, profession: "admin" },
    { name: "john", age: 24, profession: "developer" },
    { name: "Suresh", age: 24, profession: "developer" },
    { name: "mahesh", age: 24, profession: "developer" },
    { name: "ganesh", age: 21, profession: "backend dev" },
    { name: "rakesh", age: 24, profession: "react js dev" },
    { name: "yogesh", age: 24, profession: "react js dev" },
    { name: "ramesh", age: 29, profession: "Java developer" },
    { name: "lokesh", age: 29, profession: "Java developer" },
    { name: "etesh", age: 24, profession: "python dev" },
    { name: "kamlesh", age: 23, profession: "Business analyst" },
];

function generateCard() {
    data.forEach((item, index) => {
        let div = document.createElement("div");
        div.className = "card";
        let heading = document.createElement("h2");
        let age = document.createElement("p");
        let prof = document.createElement("p");
        heading.innerText = `name : ${item.name}`;
        age.innerText = `age : ${item.age}`;
        prof.innerText = `prof : ${item.profession}`;
        div.append(heading, age, prof);

        let cardContainer = document.querySelector(".card_container");
        cardContainer.append(div);
        console.log(index, div);
        console.log(cardContainer);
    });
}

function generateCard() {
    const cardContainer = document.querySelector(".card_container");
    console.log(cardContainer);
    let result = data.map((item, index) => {
        return ` <div class="card">
                    <h2>name : ${item.name}</h2>
                    <p>age: ${item.age}</p>
                    <p>profession :${item.profession}</p>
                </div>
                
                `;
    });

    cardContainer.innerHTML = result.join("");
}
