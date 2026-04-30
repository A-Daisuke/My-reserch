const Benchmark = {
    run: function() {
        var VAR_1 = "12345678901234567890123456789012345678901234567890";
        VAR_1 += VAR_1 + VAR_1;
        VAR_1 += VAR_1 + VAR_1;
        VAR_1 += VAR_1 + VAR_1;
        var VAR_2 = new Array(256 + 1).join(" ");
        var VAR_3 = "                ";
        var VAR_4 =
          VAR_1.length > 256 ? VAR_1.replace(/./g, " ") : VAR_2.substr(0, VAR_1.length);
    }
};