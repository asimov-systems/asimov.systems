<script lang="ts">
	import { onMount } from 'svelte';

	let titleVisible = false;
	let subtitleVisible = false;
	let buttonsVisible = false;

	onMount(() => {
		setTimeout(() => (titleVisible = true), 200);
		setTimeout(() => (subtitleVisible = true), 600);
		setTimeout(() => (buttonsVisible = true), 1000);
	});
</script>

<section
	class="relative flex h-screen items-center bg-cover bg-center bg-no-repeat"
	style="background-image: url('/hero-cover.png');"
>
	<div class="bg-sSlate-950 absolute inset-0 opacity-35"></div>

	<div class="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4">
		<h1
			class="font-suisse-intl mb-8 transform text-2xl leading-tight font-bold text-white transition-all duration-1000 ease-out {titleVisible
				? 'translate-y-0 opacity-100'
				: 'translate-y-8 opacity-0'}"
		>
			Welcome to
			<br />
			<span
				class="font-arges mt-12 inline-flex transform text-7xl uppercase transition-all delay-300 duration-1000 ease-out {titleVisible
					? 'translate-y-0 scale-100 opacity-100'
					: 'translate-y-8 scale-95 opacity-0'}"
			>
				<span class="text-oOrange-500">ASIMOV</span>
				<span>.</span>
				<span class="font-normal text-white">Systems</span>
			</span>
		</h1>

		<p
			class="font-suisse-intl mb-4 max-w-4xl transform text-xl leading-relaxed text-white transition-all duration-800 ease-out md:text-2xl {subtitleVisible
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			Tools for thinking better, working faster, and cutting through the noise.
		</p>

		<p
			class="font-suisse-intl text-sSlate-200 mb-12 max-w-4xl transform text-xl leading-relaxed transition-all delay-200 duration-800 ease-out md:text-2xl {subtitleVisible
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			Built for people who want more clarity — and less chaos.
		</p>

		<div
			class="flex transform flex-col gap-6 text-center transition-all duration-800 ease-out sm:flex-row {buttonsVisible
				? 'translate-y-0 opacity-100'
				: 'translate-y-6 opacity-0'}"
		>
			<a
				href="https://www.asimovprotocol.org"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-oOrange-500 hover:bg-oOrange-600 font-arges hover:shadow-oOrange-500/25 flex transform cursor-pointer items-center justify-center rounded-lg px-10 py-4 text-2xl font-bold tracking-wider text-white uppercase shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
			>
				Learn More
			</a>
			<a
				href="https://github.com/asimov-platform"
				target="_blank"
				rel="noopener noreferrer"
				class="hover:text-sSlate-900 font-arges flex transform cursor-pointer items-center justify-center rounded-lg border-2 border-white px-10 py-4 text-2xl font-bold tracking-wider text-white uppercase backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl"
			>
				View Projects
			</a>
		</div>
	</div>
</section>
