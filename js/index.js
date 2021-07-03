const inserted = document.getElementById('myInput')
inserted.addEventListener('input', function(event){
    let converted = event.target.value
    let dollarValue = document.getElementById('dollarId')
    dollarValue.innerHTML = converted * 0.0118
    let poundsValue = document.getElementById('poundsId')
    poundsValue.innerHTML = converted * 0.0085
    let euroValue = document.getElementById('eurosId')
    euroValue.innerHTML = converted * 0.0099273249
    let dirhamValue = document.getElementById('dirhamId')
    dirhamValue.innerHTML = converted * 0.043306082

})