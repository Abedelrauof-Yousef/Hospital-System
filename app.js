let form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let fullName = document.getElementById("fullName").value
    let password = document.getElementById("password").value
    let date = document.getElementById("date").value
    let gender = document.getElementById("gender").value
    let phone = document.getElementById("phone").value
    let chronicDiseases = document.getElementById("chronicDiseases").value
    
    function render(){
        let person = {
            fullName: fullName,
            password: password,
            date: date,
            gender: gender,
            phone: phone,
            chronicDiseases: chronicDiseases
        };

        let arr = [];
        let localPersonData = localStorage.getItem("person")
        if (localPersonData) {
            arr.push(...JSON.parse(localPersonData))
        }
        
        arr.push(person)
    
    
        localStorage.setItem("person", JSON.stringify(arr))
        
    }
    render();
    

    
})