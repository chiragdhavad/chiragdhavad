function display(value)
{
    console.log(value);
    document.getElementById("result").value += value;
}
function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}
function clearScreen(){

    document.getElementById('result').value = ''

}