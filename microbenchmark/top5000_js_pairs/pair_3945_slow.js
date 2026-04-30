const Benchmark = {
    run: function() {
        var VAR_1 = "regexes are fun";
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          var VAR_3 = new RegExp("x", "g");
          var VAR_4 = VAR_3.exec(VAR_1);
        }
    }
};