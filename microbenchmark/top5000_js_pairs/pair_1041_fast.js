const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefghij";
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        VAR_1 += VAR_1;
        var VAR_2 = "";
        for (var VAR_4 = 0, VAR_5 = VAR_1.length; VAR_4 < VAR_5; VAR_4++)
          VAR_2 += String.fromCharCode(VAR_1.charCodeAt(VAR_4) + 1);
    }
};