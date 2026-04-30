const Benchmark = {
    run: function() {
        var VAR_1 = Array(1000).join("abcdefghijklmnop") + "zabcdefghijklmnop";
        VAR_1.substring(0, VAR_1.indexOf("z"));
    }
};