<script>
    let casas = 10;
    let maxNBombs = 50;
    let minNBombs = 3;
let generate = (number) => {

}


let nBombs = ()=> {
    return Math.floor(Math.random() * (maxNBombs - minNBombs + 1) + minNBombs)
}

let numberBombs = nBombs();

let changeBlock = (cell) =>{
    console.log("Click", cell);
    console.log(numberBombs);
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