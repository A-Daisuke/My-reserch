const Benchmark = {
    run: function() {
        var VAR_1 = "this is a test string";
        var VAR_3 = new RegExp("^(?:this \\w+ (?!b)a test (?:strain|strong|string))$");
        for (var VAR_2 = 0; VAR_2 < 1000000; VAR_2++) {
          if (VAR_3.test(VAR_1)) {
          }
        }
    }
};