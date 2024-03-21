console.log(1234)



document.getElementById('getText').addEventListener('click', GetText)
document.getElementById('getJSON').addEventListener('click', GetJSON)
document.getElementById('getPosts').addEventListener('click', GetPosts)
document.getElementById('addPost').addEventListener('submit', AddPost)


function GetText()
{
    fetch('fetchTextFile.txt')
    .then( (res) => res.text())
    .then( (data) => document.getElementById('output').innerHTML = data)    
}

function GetJSON()
{
    fetch('fetchJSON.json')
    .then( res => res.json() )
    .then( (data) => {
        console.log(data)
        let output = '<h2>Users</h2>'
        data.forEach( element => {
            output += `<ul>
                            <li>ID: ${element.id}</li>
                            <li>Name: ${element.name}</li>
                            <li>Data: ${element.date}</li>
                        </ul>`
        })
        document.getElementById('outputJSON').innerHTML = output
    })
}

function GetPosts()
{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then( res => res.json() )
    .then( (data) => {
        console.log(data)
        let output = '<h2>Users</h2>'
        data.forEach( element => {
            output += `<div>
                        <ul>
                            <li><h4>Title: ${element.title}</h4></li>
                            <li>Body: ${element.body}</li>
                        </ul>
                        </div>`
        })
        document.getElementById('outputJSON').innerHTML = output
    })
}

function AddPost(e)
{
    e.preventDefault()
    let title = document.getElementById('title').value
    let body = document.getElementById('body').value
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept' : 'application/json, text/plain, */*' ,
            'Content-Type' : 'application/json'},
        body: JSON.stringify({title: title, body: body})
    })
    .then( res => res.json())
    .then( data => console.log(data))
}