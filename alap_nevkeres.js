function kattintnevkeres(){
    var bekeresNev = document.getElementById("bekeresNev").value
    //alert(bekeresNev)
    var szovegecske =""
    for (const elem of prizes.prizes) {
            if(elem.laureates!=undefined)

        for (const elemecske of elem.laureates) {
            if(elemecske.firstname.toLowerCase().includes(bekeresNev.toLowerCase())){
                szovegecske+=`
                    <tr>
                <td>John</td>
                <td>Doe</td>
                <td>${elemecske.firstname}</td>
                <td>${elemecske.surname}</td>
                <td>${elemecske.motivation}</td>
                    </tr>
                `

        }
    }
}
document.getElementById("test").innerHTML=szovegecske

       
        
    }




