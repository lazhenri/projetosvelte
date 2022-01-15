<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Game from "./Game/Game.svelte";
	import Sobre from "./Sobre/Sobre.svelte";
</script>

<Router>
	<header>
		<h1>Campo Minado</h1>
		<nav>
			<Link class="link" to="/">Home</Link>
			<Link class="link" to="game">Jogar</Link>
			<Link class="link" to="sobre">Sobre</Link>
		</nav>
	</header>
	<main>
		<Route path="/">
			<h3>Home</h3>
			<p>Home sweet home...</p>
		</Route>

		<Route path="game">
			<Game/>
		</Route>

		<Route path="sobre">
			<Sobre/>
		</Route>

	</main>
</Router>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}
	nav{
		margin-left: 46%;
	}

	.link{
		margin-left: 5%;
	}
	
	h1 {
		color: black;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin-left: 37%;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>