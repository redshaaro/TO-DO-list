const button = document.querySelector("button");
const input = document.querySelector("input");
const container = document.getElementById("container");

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-trash-o icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("dn");
    const heart = `<span class="icon-heart"></span>`;
    eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.add("finish");

    eo.target.parentElement.innerHTML += heart;
  }
  else if(eo.target.className=="icon-heart"){
    eo.target.parentElement.parentElement
    .getElementsByClassName("task-text")[0]
    .classList.remove("finish");
    eo.target.classList.add("dn");
    const angry=`<span class="icon-angry2 icon"></span>`;
    eo.target.parentElement.innerHTML += angry;


      
  }
});

button.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = `<div class="task">
    <span class="icon-star icon"></span>
    <p class="task-text">${input.value}</p>
    <div>
    <span class="icon-trash-o icon"></span>
    <!--<span class="icon-heart"></span>-->
    <span class="icon-angry2 icon"></span>
    </div>

</div>
`;
  container.innerHTML += task;
});
