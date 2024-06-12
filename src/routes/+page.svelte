<script lang="ts">
	import { page } from '$app/stores';
	import PDFModal from '$lib/PDFModal.svelte';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<div class="flex items-center justify-center h-[90vh]">
	{#if $page.url.searchParams.get('id')}
		<PDFModal filePath={data.filePath} id={data.id} />
	{/if}
	<svg class="h-[80vh]" viewBox="0 0 595 1075" fill="none" xmlns="http://www.w3.org/2000/svg">
		<!--Lader-->
		<a href="/?id=1">
			<rect
				x="511"
				y="1046"
				width="78"
				height="23"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=2">
			<rect
				x="431"
				y="1046"
				width="78"
				height="23"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=3">
			<rect
				x="351"
				y="1046"
				width="78"
				height="23"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Vitrne featured-->
		<a href="/?id=4" class="vitrine">
			<rect
				x="271"
				y="1046"
				width="78"
				height="23"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Tp-link-->
		<a href="/?id=5" class="tp-link">
			<rect
				x="111"
				y="1046"
				width="78"
				height="23"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Nettverk-->
		<a href="/?id=6">
			<rect x="31" y="1046" width="78" height="23" fill="#D9D9D9" stroke="black" stroke-width="2" />
		</a>
		<!--Logitech-->
		<a href="/?id=7">
			<rect
				x="29"
				y="966"
				width="78"
				height="23"
				transform="rotate(90 29 966)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Data-->
		<a href="/?id=8">
			<rect
				x="29"
				y="886"
				width="78"
				height="23"
				transform="rotate(90 29 886)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Lyd-->
		<a href="/?id=9">
			<rect
				x="29"
				y="726"
				width="78"
				height="23"
				transform="rotate(90 29 726)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=10">
			<rect
				x="29"
				y="646"
				width="78"
				height="23"
				transform="rotate(90 29 646)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Vitine Lyd-->
		<a href="/?id=11">
			<rect
				x="29"
				y="566"
				width="78"
				height="23"
				transform="rotate(90 29 566)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Dreame-->
		<a href="/?id=12">
			<rect
				x="29"
				y="486"
				width="78"
				height="23"
				transform="rotate(90 29 486)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=13">
			<rect
				x="29"
				y="406"
				width="78"
				height="23"
				transform="rotate(90 29 406)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=14">
			<rect
				x="29"
				y="326"
				width="78"
				height="23"
				transform="rotate(90 29 326)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Beskytt-->
		<a href="/?id=15">
			<rect
				x="29"
				y="166"
				width="78"
				height="23"
				transform="rotate(90 29 166)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=16">
			<rect
				x="29"
				y="86"
				width="78"
				height="23"
				transform="rotate(90 29 86)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=17">
			<rect
				x="29"
				y="6"
				width="78"
				height="23"
				transform="rotate(90 29 6)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Stativ-->
		<a href="/?id=18" class="stativ">
			<rect x="71" y="6" width="78" height="23" fill="#D9D9D9" stroke="black" stroke-width="2" />
		</a>
		<a href="/?id=19">
			<rect x="151" y="6" width="78" height="23" fill="#D9D9D9" stroke="black" stroke-width="2" />
		</a>
		<!--hylle/gulvstativ-->
		<a href="/?id=20" class="hylle">
			<rect
				x="589"
				y="937"
				width="78"
				height="23"
				transform="rotate(90 589 937)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>

		<!--Gondol-->
		<!--1 & 2-->
		<a href="/?id=21">
			<rect
				x="223"
				y="541"
				width="156.4"
				height="47.5"
				transform="rotate(90 223 541)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=22">
			<rect
				x="223"
				y="699.4"
				width="156.4"
				height="47.5"
				transform="rotate(90 223 699.4)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--3 & 4-->
		<a href="/?id=23">
			<rect
				x="173.5"
				y="699.4"
				width="156.4"
				height="47.5"
				transform="rotate(90 173.5 699.4)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<a href="/?id=24">
			<rect
				x="173.5"
				y="541"
				width="156.4"
				height="47.5"
				transform="rotate(90 173.5 541)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>

		<!--Podie-->
		<a href="/?id=25">
			<rect
				x="219.314"
				y="332.882"
				width="92.5507"
				height="382.355"
				transform="rotate(-23.273 219.314 332.882)"
				fill="#D9D9D9"
				stroke="black"
				stroke-width="2"
			/>
		</a>
		<!--Background/decorations-->
		<rect x="590.5" y="835.5" width="4" height="234" fill="#555555" stroke="black" />
		<rect
			x="594.5"
			y="1070.5"
			width="4"
			height="589"
			transform="rotate(90 594.5 1070.5)"
			fill="#555555"
			stroke="black"
		/>
		<rect
			x="336.5"
			y="0.5"
			width="4"
			height="336"
			transform="rotate(90 336.5 0.5)"
			fill="#555555"
			stroke="black"
		/>
		<rect
			x="389.989"
			y="162.643"
			width="4"
			height="170.634"
			transform="rotate(161.707 389.989 162.643)"
			fill="#555555"
			stroke="black"
		/>
		<rect x="0.5" y="5.5" width="4" height="1069" fill="#555555" stroke="black" />
	</svg>
</div>
