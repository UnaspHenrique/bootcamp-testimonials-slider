const init = () => {
    const previuos = document.getElementById('prev');
    const next = document.getElementById('next');
    const imgElement = document.getElementById('image');
    const imgWidth = imgElement.offsetWidth;

    previuos.addEventListener('click', () => {
        imgElement.scrollLeft -= imgWidth;
        let text = document.getElementById('text');
        text.innerHTML = '  “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'

        let description = document.getElementById('description')
        description.innerHTML = 'Tanya Sinclair <span>UX Engineer</span>'
    })

    next.addEventListener('click', () => {
        imgElement.scrollLeft += imgWidth;
        let text = document.getElementById('text')
        text.innerHTML = '  “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'

        let description = document.getElementById('description')
        description.innerHTML = '  John Tarkpor <span>Junior Front-end Developer</span>'
    })
}

window.onload = init;