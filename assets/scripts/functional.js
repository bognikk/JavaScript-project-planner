const activeProjects = document.querySelectorAll("#active-projects li");
const finishedProjects = document.querySelectorAll("#finished-projects li");

activeProjects.forEach((itemInNodeList) => {
	const [moreInfoBtn, switchBtn] = itemInNodeList.querySelectorAll("button");
	// moreInfoBtn.addEventListener('click',moreInfoFn.bind(itemInNodeList))
	switchBtn.addEventListener("click", switchProjectFn.bind(itemInNodeList));
});

finishedProjects.forEach((itemInNodeList) => {
	const [moreInfoBtn, switchBtn] = itemInNodeList.querySelectorAll("button");
	// moreInfoBtn.addEventListener('click',moreInfoFn.bind(itemInNodeList))
	switchBtn.addEventListener("click", switchProjectFn.bind(itemInNodeList));
});

function switchProjectFn() {
	whereToMoveActive = document.querySelector("#finished-projects ul");
	whereToMoveFinished = document.querySelector("#active-projects ul");
	if (this.parentElement.parentElement.id === "finished-projects") {
		whereToMoveFinished.append(this);
		const btn = this.querySelector("button:last-of-type");
		btn.textContent = "Finish";
		console.log(this);
	} else if (this.parentElement.parentElement.id === "active-projects") {
		whereToMoveActive.append(this);
		const btn = this.querySelector("button:last-of-type");
		btn.textContent = "Activate";
	}
}
