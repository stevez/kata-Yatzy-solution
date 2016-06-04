var _ = require('lodash');

var Yatzy = function(dice) {
    this.dice = dice;
  
    this.getSumOf = function(n) {
      return _(this.dice)
              .filter(function(value) { return value == n;})
              .sum();
                     
    }
    
    this.fours = function()
    {
       return this.getSumOf(4);
    }

    this.fives = function()
    {
        return this.getSumOf(5);
    }

    this.sixes = function()
    {
        return this.getSumOf(6);
    }
}



Yatzy.chance = function(dice) {
   return _.sum(dice);
}



Yatzy.prototype.ones = function() {
   return this.getSumOf(1);
}

Yatzy.prototype.twos = function() {
   return this.getSumOf(2);
}

Yatzy.prototype.threes = function() {
   return this.getSumOf(3);
}

function get_n_of_a_kind(dice,n) {
    var counts = [0, 0, 0, 0, 0, 0];
    _.each(dice, function(die){ counts[die-1]++;});
    
    var array_of_a_kind = [];
    _.each(counts, function(value,index) {
        if(value >= n) {
            array_of_a_kind.push(index+1);
        }
    });
    
    return _.reverse(array_of_a_kind);
}

Yatzy.two_pair = function(dice)
{
    var pairs = _.take(get_n_of_a_kind(dice,2), 2);
    return (pairs.length == 2) ? _.sum(pairs) * 2 : 0;
}

Yatzy.score_pair = function(dice)
{
   var pairs = _.take(get_n_of_a_kind(dice,2), 1);
   return (pairs.length == 1) ? _.sum(pairs) * 2 : 0; 
}

Yatzy.four_of_a_kind = function(dice)
{
    var array = _.take(get_n_of_a_kind(dice,4), 1);
    return (array.length == 1) ? _.sum(array) * 4 : 0; 
}

Yatzy.yatzy = function(dice) {
    var array = _.take(get_n_of_a_kind(dice,5), 1);
    return (array.length == 1) ? 50 : 0; 
}

Yatzy.three_of_a_kind = function(dice)
{
    var array = _.take(get_n_of_a_kind(dice,3), 1);
    return (array.length == 1) ? _.sum(array) * 3 : 0; 
}

Yatzy.smallStraight = function(dice)
{
   return  _.isEqual(_.sortBy(dice), _.range(1,6)) ?  15 : 0;
}

Yatzy.largeStraight = function(dice)
{
    return  _.isEqual(_.sortBy(dice), _.range(2,7)) ?  20 : 0;
}

Yatzy.fullHouse = function(dice)
{
    var arrayOfThreeAKind = _.take(get_n_of_a_kind(dice,3), 1);
    var arrayOfTwoPairs =  _.take(get_n_of_a_kind(dice,2), 2);
    
        if(arrayOfThreeAKind.length == 1 && arrayOfTwoPairs.length == 2) {
        return _.sum(dice);
    }
    return 0;
    
  
}

module.exports = Yatzy;


