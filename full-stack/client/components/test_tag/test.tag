<test>
	<h1>Welcome, <span class="friend">{ friend }</span>.</h1>

    <style scoped>
        :scope { display: block }
        .friend { color: #f90 }
    </style>

    <script>
        import testSvc from './components/test/test.js'

        // Call test service function
        testSvc.testFunc2();

        this.friend = 'FooBar';
    </script>
</test>
