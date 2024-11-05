<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/posts">Posts</a>
	</nav>
	<hr />
</div>

<footer>
	<p>&copy; 2024</p>
</footer>

{@render children()}

<style>
	nav {
		display: flex;
		justify-content: center;
		margin: 20px 0;
	}
	nav a {
		margin: 0 10px;
	}
	footer {
		text-align: center;
		/* put at the bottom */
		position: fixed;
		bottom: 0;
		width: 100%;
		background-color: #f4f4f4;
		padding: 10px 0;
	}
</style>
