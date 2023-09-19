function eAgora(){
    let cont = 1
    function n1(){
        console.log(cont)
    }
    cont ++
    function n2(){
        console.log(cont)
    }
    //JSON contendo as duas funções
    return {n1, n2}
}

let eAgoraRes = eAgora()

eAgoraRes.n1()
eAgoraRes.n2()