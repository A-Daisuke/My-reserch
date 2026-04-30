const Benchmark = {
    run: function() {
        var VAR_1 = /^"(o)*/;
        var VAR_2 = /^"o*/;
        var VAR_3 = /"(o)*/;
        var VAR_4 = true;
        var VAR_5 = '{ "hello": "world", "I":"smell", "a":"bug!" }';
        var VAR_6 = "";
        for (var VAR_7 = 0; VAR_7 < 1000; VAR_7++) {
          VAR_6 += VAR_5 + "\n";
        }
        var VAR_8 = "";
        for (var VAR_9 = 0; VAR_7 < 10000; VAR_7++) {
          VAR_8 += VAR_5 + "\n";
        }
        VAR_4 = VAR_1.test(VAR_6);
    }
};