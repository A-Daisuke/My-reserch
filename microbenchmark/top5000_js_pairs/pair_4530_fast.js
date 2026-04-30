const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push("foobar", "/foobar/");
        var VAR_3 = 0;
        for (var VAR_4 of VAR_1)
          if (VAR_4.length >= 2 && VAR_4[0] == "/" && VAR_4[VAR_4.length - 1] == "/") VAR_3++;
    }
};