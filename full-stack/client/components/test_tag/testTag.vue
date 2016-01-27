<template>
	<div id="test">
		<h2>
			Welcome, <span class="friend">{{ friend }}</span>.
		</h2>
	</div>
</template>

<style lang="sass">
    #test {
        .friend { color: #f90 }
    }
</style>

<script type="text/babel">
	import testSvc from '../test/test.js'

    export default {
        data()
        {
			return {
				friend: 'World'
			};
        },
		compiled()
		{
            // Call test service function
            testSvc.testFunc2();
		}
    }
</script>
