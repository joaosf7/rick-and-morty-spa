export function hasParameters(){
    return window.location.hash.includes('?')
}

export function getParameters(){
    return window.location.hash.split('?')[1]
}

export function changeId(str, id){
    console.log("changing id")
    console.log('str', str)
    console.log('id', id)
    if(hasParameters())
        window.location.hash = '' + str + id + getParameters()
    else
        window.location.hash = str + id
}