const Benchmark = {
    run: function() {
        var VAR_1 = "this is a test string";
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          if (/^(?:this \w+ (?!b)a test (?:strain|strong|string))$/.test(VAR_1)) {
          }
        }
    }
};