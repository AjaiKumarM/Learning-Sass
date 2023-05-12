

const NavScrollFun = ()=>{
    const sections = document.querySelectorAll('section');
    const navLinak  = document.querySelectorAll('.navbar-list-items > a');

   
    window.addEventListener('scroll',()=>{
        let current = '';
        sections.forEach(section=>{
            let top = window.scrollY;
            let secTop = section.offsetTop;
            let secheight = section.clientHeight;
            let id = section.getAttribute("id");
            
            if(top >= secTop && top < secTop + secheight ){
                
               navLinak.forEach(link=>{
                link.classList.remove("active")
                document.querySelector(`.navbar-list-items a[href*= ${id}]`).classList.add('active')
               })
            }
           
        })

    })
    
}

const removeTogglefun = ()=>{
    const items = document.querySelectorAll('.navbar-list-items');
    const menu = document.querySelector('.navbar-menu');
    const list = document.querySelector('.navbar-list');

    items.forEach(item=>{
        item.addEventListener("click",()=>{
            
                menu.classList.remove('active')
                list.classList.remove('show')
        
        })
    })
}
removeTogglefun()
NavScrollFun()

//Scroll Animation 
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('en-show')
        }else{
            entry.target.classList.remove("en-show")
        }
    })
})

const hideElement = document.querySelectorAll(".en-hidden");
hideElement.forEach((el)=> observer.observe(el))