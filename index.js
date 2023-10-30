let parkingSessionForm = document.getElementById('parkingSessionForm')
parkingSessionForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log("Testing")
    fetch('', {
        method: "POST",
        body: JSON.stringify({
            spot_number : document.getElementById("spot_number").value,
            license_plate : document.getElementById("license_plate").value,
            vehicle_make : document.getElementById("vehicle_make").value,
            vehicle_model : document.getElementById("vehicle_model").value
        })
    })
}
)


