<script lang="ts">
	export let id;
	export let filePath;
</script>

<div
	class="absolute self-center flex flex-col items-center bg-white w-[80vw] h-[85vh] rounded-xl border shadow-xl"
>
	<div class="flex justify-between p-2">
		<div class="spacer w-8"></div>
		<h1 class="font-semibold">Manual for section: <b class="font-bold">{id}</b></h1>
		<a class="w-8 text-center text-[red]" href="/">X</a>
	</div>
	{#if filePath}
		<object title="pdf-manual" data={'/pdf/'+filePath} type="application/pdf" width="100%" height="500%"
		></object>
	{:else}
		<h1>No data</h1>
	{/if}
</div>
