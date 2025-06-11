<script lang="ts">
	import Logo from './Logo.svelte';
	import { onMount } from 'svelte';

	const CONTACT_US_EMAIL = 'talal@asimov.systems';
	let navVisible = false;

	onMount(() => {
		setTimeout(() => (navVisible = true), 100);
	});
</script>

<nav
	class="border-oOrange-500 bg-sSlate-950/95 z-50 transform border-b-2 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out {navVisible
		? 'translate-y-0 opacity-100'
		: '-translate-y-full opacity-0'}"
>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-20 items-center justify-between">
			<div class="flex-shrink-0">
				<Logo />
			</div>

			<div class="flex items-center">
				<a
					href="mailto:{CONTACT_US_EMAIL}"
					class="bg-oOrange-500 hover:bg-oOrange-600 font-arges transform cursor-pointer rounded-lg px-6 py-2 text-2xl font-black tracking-wider text-white uppercase transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
				>
					Get in touch
				</a>
			</div>
		</div>
	</div>
</nav>
