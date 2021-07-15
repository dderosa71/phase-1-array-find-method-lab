
function finder(array){
    return array.find(obj => obj.result ==='W') 
}
function superbowlWin(arr){
    let winFound = finder(arr)
    return winFound ? winFound.year : undefined;
}
