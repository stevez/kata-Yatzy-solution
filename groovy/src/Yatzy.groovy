public class Yatzy {

	def dice;
	
	def Yatzy() {
		
	}

    def Yatzy(dice)
	{
	   this.dice = dice
	}
	
    def chance(dice)
    {
        dice.sum()
		
    }

    def yatzy(dice)
    {
       dice.unique().size() == 1 ? 50 : 0
    }

    def ones(dice) {
        dice.findAll {it == 1}.sum(0)
    }

    def twos(dice) {
		dice.findAll {it == 2}.sum(0)
    }

    def threes(dice) {
        dice.findAll {it == 3}.sum(0)
    }

    def fours(){
		dice.findAll {it == 4}.sum(0)
    }

    def fives(){
        dice.findAll {it == 5}.sum(0)
    }

    def sixes(){
        dice.findAll {it == 6}.sum(0)
    }

    def score_pair(dice){
        def maxPair = find_a_kind(2,dice).max()		
		maxPair ?  maxPair * 2 : 0
	}
	
	
    def two_pair(dice)
    {
        def pairs = find_a_kind(2,dice)
		pairs.size() == 2 ?  pairs.sum() * 2 : 0
	}

	def four_of_a_kind(dice)
    {
        def list = find_a_kind(4,dice)
		list.size() > 0 ?  list[0]*4 : 0
    }

    def three_of_a_kind(dice)
    {
		def list = find_a_kind(3,dice)
		list.size() > 0 ?  list[0]*3 : 0
    }

    def smallStraight(dice)
    {
        dice.sort() == 1..5 ?  dice.sum() : 0
    }

    def largeStraight(dice)
    {
        dice.sort() == 2..6 ? dice.sum() : 0
    }

    def fullHouse(dice)
    {
		def three_of_a_kind = find_a_kind(3,dice)
		def pair = find_a_kind(2, dice - three_of_a_kind)
        pair && three_of_a_kind ? dice.sum() : 0
    }
	
	
	def dieCount(dice) {
		def counts = [:].withDefault { k -> 0}
		dice.each {counts[it-1]++}
		counts
	}
	
	def find_a_kind(n,dice) {
		def counts = dieCount(dice)
		def pairs = counts.findAll { key, value -> value >= n}
						  .collect { key, value -> key + 1}
	}
}