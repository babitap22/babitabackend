const date =function(){
    let ct=new Date()
    let result = ct.getDate()
    let x =`Current Date is : ${result}`
    return x;
}

const month =function(){
    let ct=new Date()
    let result =ct.getMonth()
    let x = `Current Month : ${result}`
    return x;
}

const bath=function(){
    let x = "Lithium, W3D3,the topic being thouhgt today is Node-js"
    return x;
}

module.exports.printDate=date;
module.exports.printMonth=month;
module.exports.getBathInfo=bath;