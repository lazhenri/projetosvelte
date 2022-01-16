<script>
    let casas = 10;
    let maxNBombs = 50;
    let minNBombs = 3;
    let dadCells;

    let nBombs = ()=> {
        return Math.floor(Math.random() * (maxNBombs - minNBombs + 1) + minNBombs);
    }


    let numberBombs = nBombs();

    let generate = () => {
        dadCells = [...Array(casas).fill(Array(casas).fill(0))];
        let arrayBombs = [...Array(numberBombs).fill({"x": 0, "y":0})];
        //let arrayBombs = new Array(numberBombs);
        arrayBombs.forEach(ar => {
            let x = locateBombs();
            let y = locateBombs();
           // arrayBombs.push({'x':x, 'y':y });
            console.log(arrayBombs);
            // console.log("x "+x+" y "+y);
            // ar.x = x;
            // ar.y = y;
            // ar.push(x);
            // ar.push(y);
        });
    }



    let locateBombs = ()=> {
        const valor = Math.floor(Math.random() * ( casas - 1 + 1) + 1);
        console.log(valor);
        return valor;
    }


    let changeBlock = (cell) =>{
        console.log("Click", cell);
        // console.log(locateBombs());
        generate();
        //console.log(dadCells);
    }

</script>

<h2>Game</h2>

<table>

    {#each Array(casas) as _, i}
        <tr>
            {#each Array(casas) as _, nb}
                <td on:click|preventDefault={() => changeBlock(nb)}>{nb}</td>
            {/each}
        </tr>
    {/each}


</table>



<style>
    table{
        margin-left: 45%;
    }

    td{
        border-style: solid;
    }

</style>