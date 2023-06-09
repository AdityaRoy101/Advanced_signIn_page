var a = prompt("Enter your username");
if(a === "Aditya"){
    var p = prompt("Enter your password");
    if(p === "ADIT@@##~~Hello"){
        alert("Hi Aditya Roy");
    } else if(p === "forgot password"){
        var q = prompt("Enter your last known password");
        if(q === "ADIT@@12##~Hello" || q === "ADIT@@18~~Hello" || q === "A@@563##~~Hello" || q === "Ad@#$%##DEVIL"){
            var t = prompt("Enter security question");
            if(t === "birth date"){
                var e = prompt("Enter your birth date");
                if(!(e === "16/04/1998"))
                    alert("Sorry you are not unauthorized");
                else{
                    var firstname = prompt("Enter your first name");
                    var sirname = prompt("Enter your sir name");
                    if(firstname === "Aditya" && sirname === "Roy"){
                        alert("You are authorized");
                        alert("Hi "+firstname+" "+sirname);
                        var rt = prompt("Enter your new password");
                        alert("Your new password is set");
                    } else{
                       alert("Sorry you are not unauthorized");
                    }
                }
            } else{
                alert("You are unauthorized");
            }
        } else{
            alert("You are unauthorized");
        }
    }
} else if(a === "Susy"){
    var p = prompt("Enter your password");
    if(p === "Sus123@~~"){
        alert("Hi Susy");
    } else if(p === "forgot password"){
        var q = prompt("Enter your last known password");
        if(q === "Sus123@~~~~" || q === "Sus123@" || q === "Sus1@~~" || q === "123@~~"){
            var t = prompt("Enter security question");
            if(t === "birth date"){
                var e = prompt("Enter your birth date");
                if(!(e === "15/02/1962"))
                    alert("Sorry you are not unauthorized");
                else{
                    var firstname = prompt("Enter your first name");
                    var sirname = prompt("Enter your sir name");
                    if(firstname === "Susy" && sirname === "Singh"){
                        alert("You are authorized");
                        alert("Hi "+firstname+" "+sirname);
                        var rt = prompt("Enter your new password");
                        alert("Your new password is set");
                    } else{
                       alert("Sorry you are not unauthorized");
                    }
                }
            } else{
                alert("You are unauthorized");
            }
        } else{
            alert("You are unauthorized");
        }
    }
}