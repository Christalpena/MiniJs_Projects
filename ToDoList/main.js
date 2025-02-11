const miStorage = window.localStorage

const submitBtn = document.querySelector("#submit-btn")
const input = document.querySelector("#task-input")
const taskContainer = document.querySelector(".toDo")

submitBtn.addEventListener("click", () => {
    miStorage.setItem(input.value, 'false')
})

const ul = document.createElement('ul')
taskContainer.appendChild(ul)
const keys = Object.keys(miStorage)

for(const[key,value] of Object.entries(miStorage)){
    const li = document.createElement('li')
    const div = document.createElement('div')
    div.className = "task-li"

    const checkIcon = document.createElement('img')
    checkIcon.setAttribute('id',`check-${keys.indexOf(key)}`)
    checkIcon.setAttribute('src', value == 'true' ? './img/check-icon.png' : './img/check-icon-empty.png') 
    checkIcon.className = 'task-icon'

    const deleteIcon = document.createElement('img')
    deleteIcon.setAttribute('src','./img/deleteIcon.webp')
    deleteIcon.setAttribute('id',`delete-${keys.indexOf(key)}`)
    deleteIcon.className = 'task-icon'


    checkIcon.addEventListener("click", (event)=> {
        let id = event.target.id
        id = id[id.length -1]
        const checKey = miStorage.key(id)
        const value = miStorage.getItem(checKey)

        if(value == 'true'){
            checkIcon.setAttribute('src','./img/check-icon-empty.png')
            miStorage.setItem(checKey,'false')
        }else{
            checkIcon.setAttribute('src','./img/check-icon.png')
            miStorage.setItem(checKey,'true')
        }
    })
    
    deleteIcon.addEventListener('click', (e)=> {
        let id = e.target.id
        id = id[id.length -1]
        const key = miStorage.key(id)
        miStorage.removeItem(key)
        e.target.parentElement.remove()

    })
    
    div.appendChild(checkIcon)
    div.insertAdjacentHTML('beforeend', `<p>${key}</p>`);
    div.appendChild(deleteIcon)
    li.appendChild(div)
    ul.appendChild(li)
    
}


