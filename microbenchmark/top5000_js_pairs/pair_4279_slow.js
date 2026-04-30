const Benchmark = {
    run: function() {
        var VAR_1 = Array(1000).join("abcdefghijklmnop") + "zabcdefghijklmnop";
        VAR_1.replace(/z.*/, "");
    }
};