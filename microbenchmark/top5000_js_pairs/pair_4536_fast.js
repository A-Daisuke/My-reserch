const Benchmark = {
    run: function() {
        var VAR_1 = /^"(?:o)*/;
        var VAR_2 = /^"o*/;
        var VAR_3 = true;
        var VAR_4 = '{ "hello": "world", "I":"smell", "a":"bug!" }';
        for (var VAR_6 = 0; VAR_6 < 1000; VAR_6++) var VAR_7 = "";
        for (var VAR_8 = 0; VAR_6 < 10000; VAR_6++) {
          VAR_7 += VAR_4 + "\n";
        }
        VAR_3 = VAR_1.test(VAR_4);
    }
};