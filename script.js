document.addEventListener("DOMContentLoaded", function(event) {
    // window.scrollTo(0,document.body.scrollHeight);
    generateNav()
});

const generateNav = () => {
    navItems = [];
    [...document.querySelectorAll('.component')].forEach((e)=>{
        data = {
            id:e.id,
            value:e.querySelector('h2').innerHTML
        }
        console.log(data.id)
        navItems.push(data)
        newElement = document.createElement('a');
        newElement.href = "#"+data.id
        newElement.innerHTML = data.value
        document.querySelector('#sideMenu').append(newElement)
    })
}