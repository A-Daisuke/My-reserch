const Benchmark = {
    run: function() {
        var VAR_1 = "Hello, World";
        var VAR_2 = 'Hello, "World"';
        var VAR_3 = "";
        var VAR_4 = "";
        for (var VAR_5 = 0; VAR_5 < 100; VAR_5++) {
          VAR_3 += VAR_1;
          VAR_4 += VAR_2;
        }
        var VAR_6 = '"' + VAR_4.replace(/"/g, '\\"') + '"';
    }
};