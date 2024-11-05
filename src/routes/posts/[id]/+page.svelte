<script lang="ts">
	const { data } = $props();
	const { post } = data;
</script>

<div class="container">
	<h1>{post.title}</h1>
	<p>{post.body}</p>
</div>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 20px;
	}
	h1 {
		text-align: center;
		margin-top: 1rem;
		margin-bottom: 20px;
		font-weight: bold;
		font-size: large;
		color: goldenrod;
	}
</style>
