const Benchmark = {
    run: function() {
        var VAR_1 = "abc";
        var VAR_2 = new Array(10000).join("0");
        VAR_2 += "abc" + VAR_2;
        /abc/.test(VAR_2);
    }
};