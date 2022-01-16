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
        let arrayBombs = [...Array(numberBombs).fill([])];
        arrayBombs.forEach(ar => {
            let x = locateBombs();
            let y = locateBombs();
            console.log("x "+x+" y "+y);
            ar.push(x);
            ar.push(y);
        });
        console.log(arrayBombs);
    }



    let locateBombs = ()=> {
        return Math.floor(Math.random() * ( casas - 1 + 1) + 1);
    }


    let changeBlock = (cell) =>{
        console.log("Click", cell);
        // console.log(locateBombs());
        generate();
        console.log(dadCells);
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