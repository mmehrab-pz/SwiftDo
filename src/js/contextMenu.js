// ---------------------context menu------------------
let contextMenu = document.getElementById('contextMenu')
const Body = document.body

Body.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    x = e.clientX
    y = e.clientY
    contextMenu.style.display = 'flex'
    contextMenu.style.left = `${x}px`
    contextMenu.style.top = `${y}px`
})

Body.addEventListener('mousedown', (e) => {
    if (!contextMenu.contains(e.target)) {
        contextMenu.style.display = 'none';
        contextMenu.style.left = '0px';
        contextMenu.style.top = '0px';
    }
})