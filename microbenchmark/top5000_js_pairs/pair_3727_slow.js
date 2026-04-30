const Benchmark = {
    run: function() {
        var VAR_1 = "12345678901234567890123456789012345678901234567890";
        VAR_1 += VAR_1 + VAR_1;
        VAR_1 += VAR_1 + VAR_1;
        VAR_1 += VAR_1 + VAR_1;
        var VAR_2 = new Array(256 + 1).join(" ");
        var VAR_3 = "                ";
        var VAR_4 = new Array(VAR_1.length + 1).join(" ");
    }
};