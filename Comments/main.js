const miStorage = window.localStorage

const section = document.querySelector('.main-section')
const input = document.querySelector('.comment-input')
const submit = document.querySelector('.submit-btn')


input.addEventListener('input',(e)=>{
   input.setAttribute('value',e.target.value)
})
submit.addEventListener('click',()=>{
    miStorage.setItem(input.value,[])
})

const keys = Object.keys(miStorage)

function commentForm(id){
    const form = document.createElement('form')
    form.className = 'comment-form'
    const input = document.createElement('input')
    input.className = 'false'
    const btn = document.createElement('button')
    btn.textContent = 'Sent'
    
    input.addEventListener('input',(e)=>{
        input.setAttribute('value',e.target.value)
     })

    btn.addEventListener('click',(e)=>{
        const questionKey = miStorage.key(id)
        const value = miStorage.getItem(questionKey)
        let array = value ? JSON.parse(value) : []
        array.push(input.value)
        miStorage.setItem(questionKey,JSON.stringify(array))
    })

    form.appendChild(input)
    form.appendChild(btn)

    return form
}
const colors = ['#433D8B','#8E1616','#2E236C','#2A0944','#8B9A46','#3D0240']
for(let[key,value] of Object.entries(miStorage)){

    const questionContainer = document.createElement('div')
    questionContainer.className = 'question-main-container'
    const color = Math.floor(Math.random() * 6)
    questionContainer.setAttribute("style", `background-color: ${colors[color]}`)
    
    const div = document.createElement('div')
    div.className = 'question'

    const comments = document.createElement('section')
    comments.className = 'comment-section'
    comments.setAttribute('id', `comments-${keys.indexOf(key)+1}`)

    const questionComments = value ? JSON.parse(value) : []

    for(let i = 0;i < questionComments.length; i++){
        const div = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = `--> ${questionComments[i]}`
        div.appendChild(p)
        comments.appendChild(div)
    }
    comments.appendChild(commentForm(keys.indexOf(key)))

    const p =  document.createElement('p')

    const deleteIcon = document.createElement('img')
    deleteIcon.setAttribute('src', './img/deleteIcon.webp')
    deleteIcon.className = 'icon'

    const commentIcon = document.createElement('input')
    commentIcon.setAttribute('id', keys.indexOf(key))
    commentIcon.setAttribute('value','Reply')
    commentIcon.readOnly = true

    commentIcon.className = 'comment-btn'

    commentIcon.className = 'icon false'
    
    commentIcon.addEventListener('click', (e)=>{
        if(commentIcon.className.includes('false')){
            questionContainer.appendChild(comments)
            commentIcon.classList.replace("false", "true");

        }else{
            commentIcon.classList.replace("true", "false");
            const commenstSection = document.querySelector(`#comments-${Number(e.target.id)+1}`)
            commenstSection.remove()
        }
    })

    p.textContent = key

    div.appendChild(p)
    div.appendChild(commentIcon)
    questionContainer.appendChild(div)

    section.appendChild(questionContainer)

}

