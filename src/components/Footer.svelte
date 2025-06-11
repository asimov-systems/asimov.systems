<script lang="ts">
	import Logo from './Logo.svelte';
	import XLogo from 'phosphor-svelte/lib/XLogo';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';
	import { onMount } from 'svelte';

	const CONTACT_US_EMAIL = 'talal@asimov.systems';

	let footerVisible = false;
	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						footerVisible = true;
					}
				});
			},
			{ threshold: 0.1 }
		);

		const footerElement = document.querySelector('footer');
		if (footerElement) {
			observer.observe(footerElement);
		}

		return () => {
			if (observer) observer.disconnect();
		};
	});
</script>

<footer
	class="font-suisse-intl transform text-white transition-all duration-1000 ease-out {footerVisible
		? 'translate-y-0 opacity-100'
		: 'translate-y-8 opacity-0'}"
>
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-4">
			<div
				class="col-span-1 transform transition-all delay-200 duration-700 ease-out md:col-span-2 {footerVisible
					? 'translate-y-0 opacity-100'
					: 'translate-y-6 opacity-0'}"
			>
				<div class="transform transition-all duration-300">
					<Logo />
				</div>
				<p class="mt-6 mb-2 max-w-md text-lg leading-relaxed text-white">
					AI that remembers what matters and respects your data
				</p>
				<p class="text-sSlate-300 mb-8 max-w-md text-lg leading-relaxed">
					Built on verifiable knowledge, not black-box hallucinations.
				</p>
				<div class="flex space-x-6">
					<a
						href="https://x.com/ASIMOV_Protocol"
						class="text-sSlate-300 hover:text-oOrange-500 transition-colors duration-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="sr-only">X (formerly Twitter)</span>
						<XLogo size={28} />
					</a>
					<a
						href="https://github.com/asimov-platform"
						class="text-sSlate-300 hover:text-oOrange-500 transition-colors duration-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="sr-only">GitHub</span>
						<GithubLogo size={28} />
					</a>
					<a
						href="https://www.linkedin.com/company/asimov-protocol"
						class="text-sSlate-300 hover:text-oOrange-500 transition-colors duration-200"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span class="sr-only">LinkedIn</span>
						<LinkedinLogo size={28} />
					</a>
				</div>
			</div>

			<div
				class="transform transition-all delay-400 duration-700 ease-out {footerVisible
					? 'translate-y-0 opacity-100'
					: 'translate-y-6 opacity-0'}"
			>
				<h3 class="mb-6 text-xl font-semibold text-white">Quick Links</h3>
				<ul class="space-y-3">
					<li>
						<a
							href="https://www.asimovprotocol.org/about"
							class="text-sSlate-300 hover:text-oOrange-500 text-lg transition-all duration-300 hover:translate-x-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							About
						</a>
					</li>
					<li>
						<a
							href="https://github.com/asimov-platform"
							class="text-sSlate-300 hover:text-oOrange-500 text-lg transition-all duration-300 hover:translate-x-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							Projects
						</a>
					</li>
				</ul>
			</div>

			<div
				class="transform transition-all delay-600 duration-700 ease-out {footerVisible
					? 'translate-y-0 opacity-100'
					: 'translate-y-6 opacity-0'}"
			>
				<h3 class="mb-6 text-xl font-semibold text-white">Contact</h3>
				<ul class="text-sSlate-300 space-y-3 text-lg">
					<li>
						<a
							href="mailto:{CONTACT_US_EMAIL}"
							class="hover:text-oOrange-500 transition-all duration-300 hover:translate-x-2"
						>
							{CONTACT_US_EMAIL}
						</a>
					</li>
					<li
						class="hover:text-oOrange-500 cursor-default transition-all duration-300 hover:translate-x-2"
					>
						<address class="not-italic">
							131 Continental Dr<br />
							Suite 305<br />
							Newark, DE 19713
						</address>
					</li>
				</ul>
			</div>
		</div>

		<div
			class="border-sSlate-800 mt-12 transform border-t pt-8 transition-all delay-800 duration-700 ease-out {footerVisible
				? 'translate-y-0 opacity-100'
				: 'translate-y-4 opacity-0'}"
		>
			<div class="flex items-center justify-center">
				<p class="text-sSlate-300 text-base">© 2025 ASIMOV.Systems</p>
			</div>
		</div>
	</div>
</footer>
