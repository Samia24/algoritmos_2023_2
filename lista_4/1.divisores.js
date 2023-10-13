//1. Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus divisores. (flag número = 0).

import { clear_screen, obter_numero_positivo, print} from "./utils/input.js";
import { divisores_do_numero } from "./utils/math.js";

function main(){
    print('\n|------- ENCONTRAR DIVISORES -------|\n')
    
    clear_screen()
    divisores_do_numero()  
    
}



main()