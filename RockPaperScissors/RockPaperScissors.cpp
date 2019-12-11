/*
write program that throws large # of rock, paper scissors and analyzes results.
Run 8 simulations, and record results for each.
Each simulation uses different throwing strategy for player 1. 
Player 2 is computer and always executes a random throw.

-Player 1 always throws random throw.
-Player 1 throws rock until LOSS or TIE, then shift to paper, then scissors, repeat.
-same as above, with order rock, scissors, paper.
-throw rock until LOSS, then paper, then scissors, repeat.
-same as above, with order rock, scissors, paper
-throw only rock
-throw only paper
-throw only scissors

program will see if one of these strategies is better than the other in maximizing the number of player 1 wins.

each simulation is 1,000,000 throws - make this number a constant so you can change it easily

Output:
Create table with 3 rows representing tie, win, lose (from P1's perspective).
Columns are each of 8 strategies.
Each element in table represents percentage of time that state occured using that strategy.
3x8 array

*/

#include <iostream>
#include <ctime>

using namespace std;

const int MINR = 1;
const int MAXR = 3;

char checkScore(int, int);

int main()
{
    //
    //rand() % (MAXR - MINR + 1) + MINR
    
    const long int turns = 1000000;
	srand(time(0));
	
	int player1 = 0;
	int player2 = 0;
	
	//Player 1 throws random hand
	int W = 0;
	int T = 0;
	int L = 0;
	
	for(int i = 0; i < turns; i++){
	    player1 = rand() % (MAXR - MINR + 1) + MINR;
	    player2 = rand() % (MAXR - MINR + 1) + MINR;
	    //player 1 is rock
	    if(player1 == 1){
	        if(player2 == 1){
	            T++;
	        }
	        if(player2 == 2){
	            L++;
	        }
	        if(player2 == 3){
	            W++;
	        }
	    }
	    //player 1 is paper
	    if(player1 == 2){
	        if(player2 == 1){
	            W++;
	        }
	        if(player2 == 2){
	            T++;
	        }
	        if(player2 == 3){
	            L++;
	        }
	    }
	    //player 1 is scissors
	    if(player1 == 3){
	        if(player2 == 1){
	            L++;
	        }
	        if(player2 == 2){
	            W++;
	        }
	        if(player2 == 3){
	            T++;
	        }
	    }
	}
	
    cout << "Player 1: " << "Wins: " << W << "  Losses: " << L << "  Ties: " << T << endl;

    return 0;
}

char checkScore(int p1, int p2){
    
}
