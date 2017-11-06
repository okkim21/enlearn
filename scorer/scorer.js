(function(){
var Scorer = function () {
    var score = function (category, dices) {
        let _dices = [], score;
        _dices = dices.slice('');
        _dices.sort();

        // Get Scores by Category
        switch (category) {
            case 'Ones':
                score = _dices.filter(x => x == 1).reduce(sumCalculatorForNumber, 0);
                break;
            case 'Twos':
                score = _dices.filter(x => x == 2).reduce(sumCalculatorForNumber, 0);
                break;
            case 'Threes':
                score = _dices.filter(x => x == 3).reduce(sumCalculatorForNumber, 0);
                break;
            case 'Fours':
                score = _dices.filter(x => x == 4).reduce(sumCalculatorForNumber, 0);
                break;
            case 'Fives':
                score = _dices.filter(x => x == 5).reduce(sumCalculatorForNumber, 0);
                break;
            case 'Sixes':
                score = _dices.filter(x => x == 6).reduce(sumCalculatorForNumber, 0);
                break;
            case 'Sevens':
                score = _dices.filter(x => x == 7).reduce(sumCalculatorForNumber, 0);
                break;
            case 'Eights':
                score = _dices.filter(x => x == 8).reduce(sumCalculatorForNumber, 0);
                break;
            case 'ThreeOfAKind':
                score = hasDups(groupBy(_dices, r => r), 3) ? _dices.reduce(sumCalculatorForNumber, 0) : 0;
                break;
            case 'FourOfAKind':
                score = hasDups(groupBy(_dices, r => r), 4) ? _dices.reduce(sumCalculatorForNumber, 0) : 0;
                break;
            case 'AllOfAKind':
                score = hasDups(groupBy(_dices, r => r), 5) ? 50 : 0;
                break;
            case 'NoneOfAKind':
                score = hasNoDups(_dices) ? 40 : 0;
                break;
            case 'FullHouse':
                score = (hasDups(groupBy(_dices, r => r), 2) && hasDups(groupBy(_dices, r => r), 3)) ? 25 : 0;
                break;
            case 'SmallStraight':
                score = (_dices.slice(0, 4).every(isSequencial) || _dices.slice(1).every(isSequencial)) ? 30 : 0 ;
                break;
            case 'LargeStraight':
                score = _dices.every(isSequencial) ? 40 : 0 ;
                break;
            case 'Chance':
                score = _dices.reduce(sumCalculatorForNumber, 0);
                break;
            default:
                throw 'Should five dice numbers ';
        }
        return score;
    }
    // Calulation for category Ones, Twos, Threes, Fours, Fives, Sixes, Sevens, Eights, Chance
    const sumCalculatorForNumber = function (acc, n) {
        return acc + n;
    }

    // Group by for ThreeOfAKind, FourOfAKind, AllOfAKind, NoneOfAKind, FullHouse
    const groupBy = function(arr, keyGetter) {
        const map = new Map();
        arr.forEach((item) => {
            const key = keyGetter(item);
            const collection = map.get(key);
            if (!collection) {
                map.set(key, [item]);
            } else {
                collection.push(item);
            }
        });
        return map;
     }

     const hasDups = function(map, dupCount) {
        let has = false;
        map.forEach(g => {
            if (!has && g.length == dupCount)
            {
                has = true;
            }
        });
        return has;
    }

    const hasNoDups = function (dices) {
        let newDices = Array.from(new Set(dices));
        return dices.length === newDices.length;
    }

    // Check sequence for SmallStraight, LargeStraight
    const isSequencial = function (element, index, array) {
        if (index == array.length - 1) {
            return true;
        }
        return element === array[index + 1] - 1;
    }
    
    // Declare category
    const Category = Object.freeze({
        Ones:   Symbol("ones"),
        Twos:  Symbol("twos"),
        Threes: Symbol("threes"),
        Fours: Symbol("fours"),
        Fives: Symbol("fives"),
        Sixes: Symbol("sixes"),
        Sevens: Symbol("sevens"),
        Eights: Symbol("eights"),
        ThreeOfAKind: Symbol("threeOfAKind"),
        FourOfAKind: Symbol("fourOfAKind"),
        AllOfAKind: Symbol("allOfAKind"),
        NoneOfAKind: Symbol("noneOfAKind"),
        FullHouse: Symbol("fullHouse"),
        SmallStraight: Symbol("smallStraight"),
        LargeStraight: Symbol("largeStraight"),
        Chance: Symbol("chance")
    });

    // List of category with score
    var suggestedCategories = function(role, isChance = false) {
        let map = new Map();
        for (elem in Category){
            if(!isChance && elem !== 'Chance') {
                map.set(elem, score(elem, role));
            } else if (isChance){
                map.set(elem, score(elem, role));
            }
        }
    
        let scoreResult = new Map([...map.entries()].filter(x => x[1] > 0).sort((a,b) => b[1] - a[1]));
    
        return scoreResult;
    }

    return {
        score: score,
        suggestedCategories: suggestedCategories
    }
}
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = Scorer;
  else
    window.Scorer = Scorer;

})()
