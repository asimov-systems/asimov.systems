<script lang="ts">
	import Navbar from './components/Navbar.svelte';
	import Hero from './components/Hero.svelte';
	import Footer from './components/Footer.svelte';
</script>

<div class="flex min-h-screen flex-col">
	<Navbar />
	<main class="flex-grow">
		<Hero />
	</main>
	<Footer />
</div>
