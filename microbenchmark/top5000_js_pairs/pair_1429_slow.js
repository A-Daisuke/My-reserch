const Benchmark = {
    run: function() {
        eval("for (var i = 0; i < 1000; ++i) { var a = i * i; }");
    }
};