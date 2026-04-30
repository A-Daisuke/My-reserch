const Benchmark = {
    run: function() {
        var VAR_1 = Array(100000).join("hello");
        var VAR_2 = VAR_1 + "\u2012" + VAR_1;
        if (VAR_2.indexOf("\u2012") > -1) {
        }
    }
};