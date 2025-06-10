<script lang="ts">
	import Logo from './Logo.svelte';
	const CONTACT_US_EMAIL = import.meta.env.VITE_CONTACT_US_EMAIL || '';
</script>
<nav class="border-oOrange-500 border-b-2 shadow-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex-shrink-0">
				<Logo />
			</div>

			<div class="flex items-center">
				<a
					href="mailto:{CONTACT_US_EMAIL}"
					class="bg-oOrange-500 hover:bg-sSlate-800 font-arges cursor-pointer rounded-lg px-6 py-2 text-xl font-bold tracking-wider text-white uppercase transition-colors duration-200"
				>
					Get in touch
				</a>
			</div>
		</div>
	</div>
</nav>
