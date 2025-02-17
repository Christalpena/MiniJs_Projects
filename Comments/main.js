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
    form.setAttribute('id', `input-${Number(id)+1}`)

    const input = document.createElement('input')
    input.className = 'false'
    const btn = document.createElement('button')
    btn.textContent = 'Sent'
    
    input.addEventListener('input',(e)=>{
        input.setAttribute('value',e.target.value)
     })

    btn.addEventListener('click',()=>{
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

for(let[key,value] of Object.entries(miStorage)){

    const questionContainer = document.createElement('div')
    questionContainer.className = 'question-main-container'

    const div = document.createElement('div')
    div.className = 'question'

    const comments = document.createElement('section')
    const questionComments = value ? JSON.parse(value) : []

    for(let i = 0;i < questionComments.length; i++){
        const div = document.createElement('div')
        const p = document.createElement('p')
        p.textContent = questionComments[i]
        div.appendChild(p)
        comments.appendChild(div)
    }

    const commentContainer = document.createElement('div')
    commentContainer.className = 'comment-form'

    

    const p =  document.createElement('p')

    const deleteIcon = document.createElement('img')
    deleteIcon.setAttribute('src', './img/deleteIcon.webp')
    deleteIcon.className = 'icon'

    const commentIcon = document.createElement('img')
    commentIcon.setAttribute('src', './img/commentIcon.png')
    commentIcon.setAttribute('id', keys.indexOf(key))

    commentIcon.className = 'icon false'
    
    commentIcon.addEventListener('click', (e)=>{
        if(commentIcon.className.includes('false')){
            commentContainer.appendChild(commentForm(e.target.id))
            commentIcon.classList.replace("false", "true");

        }else{
            commentIcon.classList.replace("true", "false");
            const form = document.querySelector(`#input-${Number(e.target.id)+1}`)
            form.remove()
        }
    })

    p.textContent = key

    div.appendChild(p)
    div.appendChild(commentIcon)
    div.appendChild(deleteIcon)
    questionContainer.appendChild(div)
    questionContainer.appendChild(comments)
    questionContainer.appendChild(commentContainer)

    section.appendChild(questionContainer)

}

