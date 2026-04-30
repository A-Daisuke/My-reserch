const Benchmark = {
    run: function() {
        var VAR_1 = new Array(1000).join("foo,").replace(/,$/, "").split(",");
        var VAR_2;
        while ((VAR_2 = VAR_1.pop()));
    }
};