<template>
	<div id="content">
		<div><ZipAPI/></div>
		<div><BTCapi/></div>
		<div><QuizComponent/></div>
		<div><RecRead/></div>	
	</div>
</template>

<script>
import BTCapi from '@/components/BTCapi'
import ZipAPI from '@/components/ZipAPI'
import QuizComponent from '@/components/QuizComponent'
import RecRead from '@/components/RecRead'

export default {
		name: 'work',
    components: {
      QuizComponent,
			BTCapi,
			RecRead,
      ZipAPI
    }
}
</script>

<style scope>
@media(min-width: 1000px){

	#content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, minmax(200px, auto));
		grid-gap: 25px;
		max-width: 1500px;
		margin: 50px auto 50px;
	}
}
</style>