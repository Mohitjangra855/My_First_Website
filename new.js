// / To Download My Resume/ 
document.getElementById('downloadCvBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'Resume/Sai Smruti Ranjan Das.pdf';  // Path to my CV file
    link.download = 'Resume/Sai Smruti Ranjan Das.pdf';  // Name the downloaded file
    link.click();
});

// / Hero Page Animated Text/
document.addEventListener('DOMContentLoaded', () => {
    var typed = new Typed('#typed', {
        strings: ["I'm into Web Development", "Currently, I'm learning Java"],
        typeSpeed: 50,
        backSpeed: 25,
        loop: true
    });
});


// / Skill Section Animate/
document.addEventListener('DOMContentLoaded', () => {
    const skillCircles = document.querySelectorAll('.skill-circle');
    skillCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            circle.classList.remove('animate');
            void circle.offsetWidth;
            circle.classList.add('animate');
        });
    });
});

// / Hamburger Menu*/
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

});
