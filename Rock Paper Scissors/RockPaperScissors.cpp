/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

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

using namespace std;

int main()
{
    cout << "Hello World";

    return 0;
}
