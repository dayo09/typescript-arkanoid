import { CanvasView } from './view/CanvasView';

import {Ball } from './sprites/Ball'
import {Brick } from './sprites/Brick'
import {Paddle } from './sprites/Paddle'

import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'

import { createBricks } from './helpers';

import {
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    PADDLE_STARTX,
    BALL_SPEED,
    BALL_SIZE,
    BALL_STARTX,
    BALL_STARTY,
} from './setup'
// Start here
console.log("Start here!");

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView){
    view.drawInfo('Game Over!')
    gameOver = false;
}

function setGameWin(view: CanvasView){
    view.drawInfo('Game Won!');
    gameOver = false;
}

function gameLoop(
    view: CanvasView,
    bricks: Brick[],
    // paddle: Paddle,
    // ball: Ball
){
    view.clear();
    view.drawBricks(bricks);
    
    let infoTwo :HTMLObjectElement | null = document.querySelector('#infoTwo');
    if(infoTwo) {
        infoTwo.innerHTML = "HI";
    }


    requestAnimationFrame(()=>gameLoop(view, bricks))
}

function startGame(view: CanvasView) {
    score = 0;
    view.drawInfo('');
    view.drawScore(0);
    const bricks = createBricks();

    gameLoop(view, bricks);
}

const view = new CanvasView('#playField')

view.initStartButton(startGame);