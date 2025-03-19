<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	<a href="/" class="focus:text-cyan-700">home</a>
	<a href="/demo/lucia/login" class="focus:text-cyan-700">lucia</a>
</nav>

{@render children()}

