function preload()
{
    
}

function setup()
{
Canvas = createCanvas(650,420);
Video = createCapture(VIDEO);
Video.hide();
}

function draw()
{
    image(Video,125,60,400,300);
    fill("blue")
    rect(0,0,650,5);
    rect(0,0,5,420);
    rect(645,0,5,420);
    rect(0,415,650,5);
    fill("green")
    circle(0,0,100);
    circle(650,0,100);
    circle(0,420,100);
    circle(650,420,100);
}

function save()
{
    save("clacker-volleys.png");
}