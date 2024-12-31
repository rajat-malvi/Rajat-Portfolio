import React, { useEffect, useRef } from "react";

const StarryBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const STAR_COLOR = "#fff";
    const STAR_SIZE = 3;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    let scale = window.devicePixelRatio || 1;
    let width;
    let height;

    const stars = [];
    let pointerX, pointerY;
    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
    let touchInput = false;

    function generateStars() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }

    function resizeCanvas() {
      scale = window.devicePixelRatio || 1;

      width = window.innerWidth * scale;
      height = window.innerHeight * scale;

      canvas.width = width;
      canvas.height = height;

      stars.forEach(placeStar);
    }

    function placeStar(star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star) {
      let direction = "z";

      const vx = Math.abs(velocity.x);
      const vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        if (vx > vy) {
          direction = Math.random() < vx / (vx + vy) ? "h" : "v";
        } else {
          direction = Math.random() < vy / (vx + vy) ? "v" : "h";
        }
      }

      if (direction === "z") {
        star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else {
        star.x =
          direction === "h"
            ? velocity.x > 0
              ? -OVERFLOW_THRESHOLD
              : width + OVERFLOW_THRESHOLD
            : Math.random() * width;

        star.y =
          direction === "v"
            ? velocity.y > 0
              ? -OVERFLOW_THRESHOLD
              : height + OVERFLOW_THRESHOLD
            : Math.random() * height;
      }
    }

    function updateStars() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;

      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;

      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    function renderStars() {
      context.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = "round";
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;

        context.moveTo(star.x, star.y);

        const tailX = velocity.x * 2;
        const tailY = velocity.y * 2;

        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
      });
    }

    function animationStep() {
      updateStars();
      renderStars();
      requestAnimationFrame(animationStep);
    }

    function onMouseMove(event) {
      touchInput = false;

      pointerX = event.clientX;
      pointerY = event.clientY;

      velocity.tx = (pointerX - width / 2) / 8;
      velocity.ty = (pointerY - height / 2) / 8;
    }

    function onTouchMove(event) {
      touchInput = true;

      const touch = event.touches[0];
      pointerX = touch.clientX;
      pointerY = touch.clientY;

      velocity.tx = (pointerX - width / 2) / 8;
      velocity.ty = (pointerY - height / 2) / 8;

      event.preventDefault();
    }

    window.addEventListener("resize", resizeCanvas);
    // canvas.addEventListener("mousemove", onMouseMove);
    // canvas.addEventListener("touchmove", onTouchMove);

    resizeCanvas();
    generateStars();
    animationStep();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    //   canvas.removeEventListener("mousemove", onMouseMove);
    //   canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full bg-black -z-10 "
    ></canvas>
  );
};

export default StarryBackground;
