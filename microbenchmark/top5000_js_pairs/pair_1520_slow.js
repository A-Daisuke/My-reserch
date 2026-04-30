const Benchmark = {
    run: function() {
        eval("for (var i=0; i<1000; i++) {x = 1+2+3+4+5;}");
    }
};