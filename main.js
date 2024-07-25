
rwristx = 0;
lwristx = 0;
dif = 0;

function setup() {
	video = createCapture(VIDEO);
	video.size(550,500);
	
	canvas = createCanvas(550,550);
	canvas.position(560,150);
	
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	}

function modelLoaded() {
	console.log('PoseNet is initialised.');
	}

function gotPoses(results) {
	if (results.length>0) {
		console.log(results)
		lwristx = results[0].pose.leftWrist.x;
		rwristx = results[0].pose.rightWrist.x;
		dif = floor(lwristx - rwristx);
		console.log("Left wrist X = "+lwristx+" Right wrist X = "+rwristx+" Difference = "+dif);

		}
	}

function draw() {
	background('#AFD7A0');
	document.getElementById("square_side").innerHTML = "Text size will be: "+dif+"px";
	fill('#32a895');
	stroke('#32a895');
	text('Kashvi',10,300);
	textSize(dif);
	}
