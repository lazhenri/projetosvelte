<script>
  const casas = 10;
  let maxNBombs = 10;
  let minNBombs = 3;
  let dadCells;
  let bombs;


  let init = () => {
    dadCells = Array.from(Array(casas), () => new Array(casas));
    bombs = generateBombs();
    populateDad();
    populateBombs();

  }

  let nBombs = () => {
    return Math.floor(Math.random() * (maxNBombs - minNBombs + 1) + minNBombs);
  };
  
  let numberBombs = nBombs();
  

  function populateDad () {
    for(let i = 0; i < dadCells.length; i++){
      for(let x = 0; x < dadCells[i].length; x++){
        dadCells[i][x] = 0;
      }
    }
  }

  let populateBombs = () => {
      for (const bomb of bombs) {
        if(dadCells[bomb.x] != undefined && dadCells[bomb.x][bomb.y] != undefined){
          dadCells[bomb.x][bomb.y] = "*";
        }
      }
  };
  
  const f = () => {
    return new Promise((r) => {
      const position = new Object({ x: locateBombs(), y: locateBombs() });
      const hasValueInArray = bombs.filter((el) => {
        return JSON.stringify(el) == JSON.stringify(position);
      });
      if (hasValueInArray.length === 0) bombs.push(position);
      if (bombs.length === numberBombs) r();
      else {
        f();
        r();
      }
    });
  };

  function generateBombs (){
    return Array.from(Array(numberBombs), () => new Object({x: locateBombs(), y: locateBombs()}) );
  }

  function populateTips (){
    
  }

  let generate = () => {
    
    // dadCells = [...Array(casas).fill(Array(casas).fill(0))];
    bombs = generateBombs();
    populateDad();
    populateBombs();
    // f().then((data) => {
    //   console.log(bombs);
    //   populateDad();
    //   populateBombs();
    // });
    //console.log(dadCells);
    // let arrayBombs = [...Array(numberBombs).fill({"x": 0, "y":0})];
    //let arrayBombs = new Array(numberBombs);
    // arrayBombs.forEach(ar => {
    //     let x = locateBombs();
    //     let y = locateBombs();
    //    // arrayBombs.push({'x':x, 'y':y });
    //     // console.log("x "+x+" y "+y);
    //     // ar.x = x;
    //     // ar.y = y;
    //     // ar.push(x);
    //     // ar.push(y);
    // });

    // for (let obj of arrayBombs) {
    //     obj.x = locateBombs();
    //     obj.y = locateBombs();
    // }
    // console.log(bombs);
  };

  let locateBombs = () => {
    return Math.floor(Math.random() * (casas - 1 + 1) + 1);
  };

  let changeBlock = (cell) => {
    console.log("Click", cell);
    // console.log(locateBombs());
    generate();
    //console.log(dadCells);
  };

  init();
</script>

<h2>Game</h2>

<table>
  {#each dadCells as dc, dcI}
    <tr>
      {#each dc as sc, scI}
        <td on:click|preventDefault={() => changeBlock(sc)}>{sc}</td>
      {/each}
    </tr>
  {/each}
</table>

<style>
  table {
    margin-left: 45%;
  }

  td {
    border-style: solid;
  }
</style>
