<svelte:head>
	<link rel="stylesheet" href="/styles/menu.css">
</svelte:head>

<script>
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
</script>

<h1>
	Campo Minado 
</h1>

<div class='menu' on:click={() => trocarEstadoDoJogo('PLAY')}>
	PLAY
</div>

<div class='menu' on:click={() => trocarEstadoDoJogo('Sobre')}>
	Sobre
</div>