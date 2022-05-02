export const scrollTo = (element, to, duration) => {
    console.log(element.scrollTop);

    let start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    console.log(start, change, currentTime, increment);

    const animateScroll = function() {
        currentTime += increment;
        element.scrollTop = Math.easeInOutQuad(currentTime, start, change, duration);
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};
