document.addEventListener("DOMContentLoaded", function(event) {
    // window.scrollTo(0,document.body.scrollHeight);
    generateNav()
});

const generateNav = () => {
    navItems = [];
    [...document.querySelectorAll('section')].forEach((e)=>{
        data = {
            id:e.id,
            value:e.querySelector('h2').innerHTML
        }
        navItems.push(data)
        newElement = document.createElement('a');
        newElement.href = "#"+data.id
        newElement.innerHTML = data.value
        document.querySelector('#sideMenu').append(newElement)
    })
}