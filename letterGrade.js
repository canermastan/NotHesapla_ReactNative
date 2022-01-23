export default function returnLetterGrade(gecmeNotu,result){
    if (gecmeNotu == 45){
        if (result >= 85) return 'AA'
        else if (result >= 75 && result < 85) return 'BA'
        else if (result >= 65 && result < 75) return 'BB'
        else if (result >= 57 && result < 65) return 'CB'
        else if (result >= 50 && result < 57) return 'CC'
        else if (result >= 40 && result < 50) return 'DC'
        else if (result >= 30 && result < 40) return 'FD'
        else if (result >= 0 && result < 30) return 'FF'
    }
    else if (gecmeNotu == 50){
        if (result >= 90) return 'AA'
        else if (result >= 85 && result < 90) return 'BA'
        else if (result >= 80 && result < 85) return 'BB'
        else if (result >= 70 && result < 80) return 'CB'
        else if (result >= 60 && result < 70) return 'CC'
        else if (result >= 55 && result < 60) return 'DC'
        else if (result >= 50 && result < 55) return 'DD'
        else if (result >= 40 && result < 50) return 'FD'
        else return 'FF'
    }
    else if (gecmeNotu == 60){
        if (result >= 90) return 'AA'
        else if (result >= 85 && result < 90) return 'BA'
        else if (result >= 80 && result < 85) return 'BB'
        else if (result >= 75 && result < 80) return 'CB'
        else if (result >= 70 && result < 75) return 'CC'
        else if (result >= 65 && result < 70) return 'DC'
        else if (result >= 60 && result < 65) return 'DD'
        else if (result >= 50 && result < 60) return 'FD'
        else return 'FF'
    }
}