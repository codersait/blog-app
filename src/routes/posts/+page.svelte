<script lang="ts">
	import photo from '$lib/assets/post.jpg';
	const { data } = $props();
	const { posts } = data;
</script>

<h1>Posts</h1>
<div class="post">
	{#each posts as post (post.id)}
		<div class="card bg-base-100 w-96 shadow-xl">
			<figure>
				<img src={photo} alt="foto" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">{post.title}</h2>
				<p>{post.body.split(' ').slice(0, 10).join(' ')}</p>
				<div class="card-actions justify-end">
					<a href="/posts/{post.id}" class="btn btn-primary">Continue</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<style>
	.post {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
	h2 {
		color: dodgerblue;
	}
	h1 {
		text-align: center;
		margin-bottom: 1rem;
		margin-top: 1rem;
		font-weight: bolder;
		font-size: large;
		color: goldenrod;
	}
</style>
