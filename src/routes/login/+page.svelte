<script lang="ts">
	import type { ActionData } from '../$types';

	export let form: ActionData;
</script>

<div class="h-[80vh] flex justify-center items-center">
	<form method="post" class="flex flex-col space-y-3 w-[30vw]">
		{#if form?.success == false}
			<h1 class="text-center bg-red-200 rounded-md p-1 border border-[red]">Wrong password!</h1>
		{/if}
		<input
			class="text-xl p-1 rounded-md border pl-1"
			placeholder="Password"
			type="password"
			name="password"
		/>
		<button class="text-xl p-1 rounded-md bg-slate-200" type="submit">Login</button>
	</form>
</div>
