<script lang="ts">
	import Logo from './Logo.svelte';
	import XLogo from 'phosphor-svelte/lib/XLogo';
	import GithubLogo from 'phosphor-svelte/lib/GithubLogo';
	import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo';

	const CONTACT_US_EMAIL = import.meta.env.VITE_CONTACT_US_EMAIL || '';
</script>

<footer class="text-white">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-4">
			<div class="col-span-1 md:col-span-2">
				<Logo />
				<p class="text-sSlate-300 mt-6 mb-8 max-w-md text-lg leading-relaxed">
					Pioneering intelligent systems that transform ideas into reality. Building the future, one
					innovation at a time.
				</p>
				<div class="flex space-x-6">
					<a
						href="https://x.com/ASIMOV_Protocol"
						class="text-sSlate-300 hover:text-oOrange-500 transition-colors duration-200"
						target="_blank"
					>
						<span class="sr-only">Twitter</span>
						<XLogo size={28} />
					</a>
					<a
						href="https://github.com/asimov-platform"
						class="text-sSlate-300 hover:text-oOrange-500 transition-colors duration-200"
						target="_blank"
					>
						<span class="sr-only">GitHub</span>
						<GithubLogo size={28} />
					</a>
					<a
						href="https://www.linkedin.com/company/asimov-protocol"
						class="text-sSlate-300 hover:text-oOrange-500 transition-colors duration-200"
						target="_blank"
					>
						<span class="sr-only">LinkedIn</span>
						<LinkedinLogo size={28} />
					</a>
				</div>
			</div>

			<div>
				<h3 class="mb-6 text-xl font-semibold text-white">Quick Links</h3>
				<ul class="space-y-3">
					<li>
						<a
							href="https://www.asimovprotocol.org/about"
							class="text-sSlate-300 hover:text-oOrange-500 text-lg transition-colors duration-200"
							target="_blank"
							>About</a
						>
					</li>
					<li>
						<a
							href="https://github.com/asimov-platform"
							class="text-sSlate-300 hover:text-oOrange-500 text-lg transition-colors duration-200"
							target="_blank"
							>Projects</a
						>
					</li>
				</ul>
			</div>

			<div>
				<h3 class="mb-6 text-xl font-semibold text-white">Contact</h3>
				<ul class="text-sSlate-300 space-y-3 text-lg">
					<li>
						<a href="mailto:{CONTACT_US_EMAIL}" class="hover:text-oOrange-500 transition-colors duration-200">
							{CONTACT_US_EMAIL}
						</a>
					</li>
					<li class="hover:text-oOrange-500 transition-colors duration-200">
						599 Fairchild Dr, Mountain View, CA 94043
					</li>
				</ul>
			</div>
		</div>

		<div class="border-sSlate-800 mt-12 border-t pt-8">
			<div class="flex flex-col items-center justify-between md:flex-row">
				<p class="text-sSlate-300 text-base">© 2025 ASIMOV.Systems. All rights reserved.</p>
			</div>
		</div>
	</div>
</footer>
