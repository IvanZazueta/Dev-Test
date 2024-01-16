export function isValidWalk(walk: string[]) {
    var x = 0;
	var y = 0;
	var longitud = walk.length;

    if (longitud == 0){
        return false;
    }

	for (var i = 0; i < longitud; i++){
		
		switch (walk[i]){
			case 'n':
				y--;
				break;
			case 's':
				y++;
				break;
			case 'w':
				x--;
				break;
			case 'e':
				x++;
				break;
		}
	}

	return longitud === 10 && x === 0 && y === 0;
}

