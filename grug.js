class Grug {
    constructor(name, big=false){
        this.name = name;
        this.isBhig = big;
        this.LEFTIMG = (this.isBhig) ? "./images/gruglord.W.png" : "./images/grug.W.png";
        this.RIGHTIMG = (this.isBhig) ? "./images/gruglord.E.png" : "./images/grug.E.png";
        this.direction = (Math.random() < .5) ? -1 : 1;
        this.speed = (this.isBhig) ? (Math.random() * 25) * 5 : Math.random()*25;
        this.position = 0;
        this.div = null;
        this.img = null;
        this.txt = null;
    }
    createGrug = () => {
        let gContainer = document.createElement("div");
        gContainer.className = "gcontainer";
        gContainer.style.width = (this.isBhig) ? "64px" : "32px";

        let gname = document.createElement("div");
        gname.className = "gname";
        gname.innerText = this.name;

        let g = document.createElement("img");
        g.className = (this.isBhig) ? "gruglord" : "grug";
        g.src = (this.direction == -1) ? this.LEFTIMG : this.RIGHTIMG;
        g.alt = (this.isBhig) ? "A bhig bhoi" : "A silly grug";
        gContainer.appendChild(gname);
        gContainer.appendChild(g);
    
        // Append the Grug to the container temporarily to calculate offsetWidth
        const container = document.getElementById("container");
        container.appendChild(gContainer);
    
        // Get the container's left offset
        const containerRect = container.getBoundingClientRect();
        const containerLeftOffset = containerRect.left;
    
        // Generate a random position within the bounds of the container
        const maxPosition = container.clientWidth - g.offsetWidth;
        let randomPosition = Math.round(Math.random() * maxPosition);
    
        // Set the initial position, accounting for the container's offset
        gContainer.style.left = (containerLeftOffset + randomPosition) + 'px';
        this.div = gContainer;
        this.img = g;
        this.txt = gname;
        return this;
    };
    changeDirection = () => {
        this.direction *= -1;

        this.img.src = (this.direction == -1) ? this.LEFTIMG : this.RIGHTIMG;
    }
    move() {
        let posX = parseInt(window.getComputedStyle(this.div).left, 10) || 0;

        setInterval(() => {
            if (!this.isInBounds(this.div)) this.changeDirection();
            else if (Math.random() < 0.0125) this.changeDirection();

            posX += this.direction;
            this.div.style.left = posX + 'px';
        }, this.speed);
    }
    isInBounds = () => {
        // Get the container's left offset
        const containerRect = container.getBoundingClientRect();
        const containerLeftOffset = containerRect.left;
    
        // Get the current position of the Grug
        const grugRect = this.div.getBoundingClientRect();
        const grugLeftPosition = grugRect.left;
    
        // Calculate the rightmost position of the Grug
        const grugRightPosition = grugLeftPosition + this.div.offsetWidth;
    
        // Check if the Grug is within the horizontal bounds of the container
        const isWithinLeftBoundary = grugLeftPosition >= containerLeftOffset;
        const isWithinRightBoundary = grugRightPosition <= containerLeftOffset + container.clientWidth;
    
        return isWithinLeftBoundary && isWithinRightBoundary;
    };
    
}