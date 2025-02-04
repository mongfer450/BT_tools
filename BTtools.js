// track ราคา btt, atp, abp และ update ให้ realtime
// แสดงจำนวน bigtime ที่ต้อง earn เพื่อ breakeven
// 
let rToken;
let rPMod;
let rHg;

function calAll(){

    let bttP = 0.1;
    calToken(bttP, 0.0074, 3.11, 2.87); //btt, tcP, atP, abP
    calPMOD(0.2, bttP);
    calHgt(0.99);

    let sum = rToken + rPMod + rHg;

    document.getElementById("outputResult").innerText = 
        "Token cost: $" + rToken.toFixed(2) + 
        " || P-modchips cost: $" + rPMod.toFixed(2) +
        " || Hg Time cost: $" + rHg.toFixed(2) +
        " || Total Cost: $" + sum.toFixed(2);
}

function calToken(bttP, tcP, atP, abP) {
    let qtyToken = document.getElementById("inputToken").value;
    qtyToken = parseFloat(qtyToken);
    let result;
    let formula = document.getElementById("tokenSelect").value;

    if (isNaN(qtyToken)) {
        qtyToken = 0;
        rToken = 0;
        return;
    }
    else{
        switch(formula) {
            case "btt":
                result = qtyToken*bttP;
                break;
            case "tc":
                result = qtyToken*tcP;
                break;
            case "at":
                result = (qtyToken/25)*atP;
                break;
            case "ab":
                result = (qtyToken/25)*abP;
                break;
            default:
                result = "Invalid formula selected";
        }
        
    }
    rToken = result;
}

function calPMOD(pricePMod, bttP) {
    let qtyPMod = document.getElementById("inputPMOD").value;
     if (isNaN(qtyPMod)) {
         qtyPMod = 0;
         return;
     }

     rPMod = parseFloat(qtyPMod*(pricePMod * bttP));
    
}

function calHgt(aHrCost) {
    let Hgt = document.getElementById("inputHgT").value;
    if (isNaN(Hgt)) {
        Hgt = 0;
        return;
    }

    rHg = parseFloat(Hgt*((aHrCost/60)*5));
}



