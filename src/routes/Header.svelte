<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
	import NavItem from '$lib/components/nav/NavItem.svelte';
</script>

<header>
		<nav class="w-full flex h-16 bg-accent-foreground justify-center">
			<img src={logo} alt="Recipe Base" class="w-16 h-16"/>
			<ul class="text-primary-foreground h-16 flex w-full justify-center">
				<NavItem href="/">Home</NavItem>
				<NavItem href="/blog">Blog</NavItem>
				<NavItem href="/about">About</NavItem>
<!--				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="w-16 flex justify-center items-center">-->
<!--					<a href="/">Home</a>-->
<!--				</li>-->
<!--				<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>-->

<!--				</li>-->
			</ul>
		</nav>
</header>

<style>

</style>
