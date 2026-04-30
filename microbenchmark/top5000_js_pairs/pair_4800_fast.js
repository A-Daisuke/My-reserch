const Benchmark = {
    run: function() {
        var VAR_1 = "some string here";
        var VAR_2 = " ";
        var VAR_3 = 150;
        VAR_7 = VAR_2.repeat(Math.max(VAR_3 - VAR_1.length, 0)) + VAR_1;
    }
};