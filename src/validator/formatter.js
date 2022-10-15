const trim =require('trim')
const lower =require('lower-case')
const upper =require('upper-case')

let trimmm =function(){
    let str ="           FunctionUp          "
    let result =trim(str)
    return result;
}

let low =function(){
    let result =lower.lowerCase("I Am ThE STudenT OF LIThiuM BatCH")
    return result;
}

let up =function(){
    let str ="i am The Student of Lithium Batch"
    let result =upper.upperCase(str)
    return result;
}

module.exports.trimm=trimmm;
module.exports.ChangeUpperCase=up;
module.exports.ChangeLowerCase=low;
