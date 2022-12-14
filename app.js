"use strict";

class App
{
    runApplication()
    {
        let mijnGetallen = [1,2,77,999];

        /*
            zet op de juiste plek (vervang de ? vraagtekens):

            i++
            length
            let i
            i
        */
        for(? = 0; i < mijnGetallen.?; ?)
        {
            let mijnGetal = mijnGetallen[?];
            console.log(mijnGetal);
        }

        /*
            zet op de juiste plek (vervang de ? vraagtekens):

            break
            while
            log
            count < 3
            }
            gooi == 6
        */
        
        let count = 0;
        //we gaan door tot 3 pogingen om een 6 te gooien
        ?(?)
        {
            
            let gooi = Math.floor(Math.random() * 6) + 1;
            if(?)
            {
                console.?("yes!");
                ?
            ?
        }
    }
}

let app = new App();
app.runApplication();