// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
    //Mission buttons
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById('landing')
    const abortButton = document.getElementById('missionAbort')
    //Movement buttons
    const moveUp = document.getElementById("up");
    const moveDown = document.getElementById("down");
    const moveRight = document.getElementById("right");
    const moveLeft = document.getElementById("left");

    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const spaceship = document.getElementById("rocket")

    // spaceship.style.position = "absolute";
    spaceship.style.left = "0px"
    spaceship.style.right = "0px"
    spaceship.style.top = "0px"
    spaceship.style.down = "0px"

    takeoffButton.addEventListener("click", function () {
        let shouldTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");

        if (shouldTakeOff) {
            flightStatus.innerHTML = 'Shuttle in flight';
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = 10000;
        }
    });

    landButton.addEventListener("click", function () {
        let shouldLand = confirm("The shuttle is landing. Landing gear engaged.");

        if (shouldLand) {
            flightStatus.innerHTML = "The shuttle has landed";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    abortButton.addEventListener("click", function () {
        let shouldAbort = confirm("Confirm that you want to abort the mission.");

        if (shouldAbort) {
            flightStatus.innerHTML = "Mission aborted";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    })
    moveLeft.addEventListener("click", function () {
        
        spaceship.style.left=(parseInt(spaceship.style.left)-10)+"px";  
       
    })
    moveRight.addEventListener("click", function () {
        
        spaceship.style.left=(parseInt(spaceship.style.left)+10)+"px";  
       
    })
    moveUp.addEventListener("click", function () {
        
        spaceship.style.top=(parseInt(spaceship.style.top)-10)+"px";  
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000
    })
    moveDown.addEventListener("click", function () {
        
        spaceship.style.top=(parseInt(spaceship.style.top)+10)+"px";  
        spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000
    })

})