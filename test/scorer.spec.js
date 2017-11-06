const assert = require('assert')
const scorerService = require('../scorer/scorer')()

describe('ScorerService', function () {

    describe('score', function () {

        it('Ones should sum all the ones', function () {
            let catetory = 'Ones';
            let dices =[1,2,5,6,1];
            assert.equal(2, scorerService.score(catetory, dices));
        })

        it('Twos should sum all the twos', function () {
            let catetory = 'Twos';
            let dices =[2,2,3,6,1];
            assert.equal(4, scorerService.score(catetory, dices));
        })

        it('Threes should sum all the threes', function () {
            let catetory = 'Threes';
            let dices =[3,3,2,6,1];
            assert.equal(6, scorerService.score(catetory, dices));
        })

        it('Fours should sum all the fours', function () {
            let catetory = 'Fours';
            let dices =[4,4,2,6,1];
            assert.equal(8, scorerService.score(catetory, dices));
        })

        it('Fives should sum all the fives', function () {
            let catetory = 'Fives';
            let dices =[5,5,2,6,1];
            assert.equal(10, scorerService.score(catetory, dices));
        })

        it('Sixes should sum all the sixes', function () {
            let catetory = 'Sixes';
            let dices =[6,6,2,5,1];
            assert.equal(12, scorerService.score(catetory, dices));
        })

        it('Sevens should sum all the sevens', function () {
            let catetory = 'Sevens';
            let dices =[7,7,2,6,1];
            assert.equal(14, scorerService.score(catetory, dices));
        })

        it('Eights should sum all the eights', function () {
            let catetory = 'Eights';
            let dices =[8,8,2,6,1];
            assert.equal(16, scorerService.score(catetory, dices));
        })

        it('ThreeOfAKind should sum all dice', function () {
            let catetory = 'ThreeOfAKind';
            let dices =[3,2,2,6,2];
            assert.equal(15, scorerService.score(catetory, dices));
        })

        it('ThreeOfAKind should 0', function () {
            let catetory = 'ThreeOfAKind';
            let dices =[3,2,2,6,1];
            assert.equal(0, scorerService.score(catetory, dices));
        })

        it('FourOfAKind should sum all dice', function () {
            let catetory = 'FourOfAKind';
            let dices =[3,3,3,6,3];
            assert.equal(18, scorerService.score(catetory, dices));
        })

        it('FourOfAKind should 0', function () {
            let catetory = 'FourOfAKind';
            let dices =[1,3,3,6,3];
            assert.equal(0, scorerService.score(catetory, dices));
        })

        it('AllOfAKind should 50', function () {
            let catetory = 'AllOfAKind';
            let dices =[3,3,3,3,3];
            assert.equal(50, scorerService.score(catetory, dices));
        })

        it('AllOfAKind should 0', function () {
            let catetory = 'AllOfAKind';
            let dices =[1,3,3,3,3];
            assert.equal(0, scorerService.score(catetory, dices));
        })

        it('NoneOfAKind should 40', function () {
            let catetory = 'NoneOfAKind';
            let dices =[1,2,3,5,7];
            assert.equal(40, scorerService.score(catetory, dices));
        })

        it('NoneOfAKind should 0', function () {
            let catetory = 'NoneOfAKind';
            let dices =[1,2,3,5,2];
            assert.equal(0, scorerService.score(catetory, dices));
        })
        
        it('FullHouse should 25', function () {
            let catetory = 'FullHouse';
            let dices =[1,1,3,3,3];
            assert.equal(25, scorerService.score(catetory, dices));
        })

        it('FullHouse should 0', function () {
            let catetory = 'FullHouse';
            let dices =[1,2,3,4,5];
            assert.equal(0, scorerService.score(catetory, dices));
        })

        it('SmallStraight should 30', function () {
            let catetory = 'SmallStraight';
            let dices =[1,2,3,4,4];
            assert.equal(30, scorerService.score(catetory, dices));
        })

        it('SmallStraight should 0', function () {
            let catetory = 'SmallStraight';
            let dices =[1,2,3,5,7];
            assert.equal(0, scorerService.score(catetory, dices));
        })

        it('LargeStraight should 40', function () {
            let catetory = 'LargeStraight';
            let dices =[1,2,3,4,5];
            assert.equal(40, scorerService.score(catetory, dices));
        })

        it('LargeStraight should 0', function () {
            let catetory = 'LargeStraight';
            let dices =[1,2,3,8,7];
            assert.equal(0, scorerService.score(catetory, dices));
        })

        it('Chance should sum all dice', function () {
            let catetory = 'Chance';
            let dices =[1,2,3,5,2];
            assert.equal(13, scorerService.score(catetory, dices));
        })
    })

    describe('suggestedCategories', function () {

        it('ThreeOfAKind should same as Chance', function () {
            let dices =[3,3,8,8,8];
            let result = scorerService.suggestedCategories(dices, true);
            let threeOfAKind, chance;

            for (var [key, value] of result) {
                if (key === 'ThreeOfAKind') threeOfAKind = value;
                if (key === 'Chance') chance = value;
            }
            assert.equal(threeOfAKind, chance);
        })
    })
  
});