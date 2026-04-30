const Benchmark = {
    run: function() {
        eval("for(var i = 0; i<10000 ; i++) {var a = function() {}}");
    }
};