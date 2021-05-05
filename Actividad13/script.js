const acquireHelmet = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Comprar sombrero");
	}, 1*1000)
})
const acquireGloves = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Comprar guantes");
	}, 2*1000)
})
const ride = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Ir de paseo en bici");
	}, 8*1000)
})
const bikeRiding = () => {
	acquireHelmet
		.then(helmetMessage => {
			console.log(helmetMessage);
			document.getElementById("update")
					.innerHTML = `Actividad: ${helmetMessage}`;
			return acquireGloves;
		})
		.then(glovesMessage => {
			console.log(glovesMessage);
			document.getElementById("update")
					.innerHTML = `Actividad: ${glovesMessage}`;
			return ride;
		})
		.then(bikeMessage => {
			console.log(bikeMessage);
			document.getElementById("update")
					.innerHTML = `Actividad: ${bikeMessage}`;
			return bikeMessage;
		})
		.catch(error => {
			document.getElementById("update")
					.innerHTML = error;
			console.log(error);
		})
		.finally(() => {
			setTimeout(() => {
				console.log("Las tareas han sido finalizadas.");
				document.getElementById("update")
						.innerHTML = "Las tareas han sido finalizadas.";
			}, 1*1000)
		})
}
bikeRiding();
