#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int joueur, ordinateur;
    srand(time(NULL));
    printf("=== Pierre-Papier-Ciseaux ===\n");
    printf("Choisissez une option :\n");
    printf("1 - Pierre\n");
    printf("2 - Papier\n");
    printf("3 - Ciseaux\n");
    printf("Votre choix : ");
    scanf("%d", &joueur);
    
    if (joueur < 1 || joueur > 3) {
        printf("Choix invalide !\n");
        return 1;
    }

    ordinateur = rand() % 3 + 1;

    printf("L'ordinateur a choisi : ");
    if (ordinateur == 1) 
            printf("Pierre\n");
    else if (ordinateur == 2) 
            printf("Papier\n");
    else 
            printf("Ciseaux\n");

 
    if (joueur == ordinateur) {
        printf("Egalite !\n");
    } 
    else if ((joueur == 1 && ordinateur == 3) || 
               (joueur == 2 && ordinateur == 1) || 
               (joueur == 3 && ordinateur == 2)) {
        printf("Bravo ! Vous avez gagne !\n");
    } 
    else {
        printf("Dommage... L'ordinateur a gagne.\n");
    }
    return 0;
}