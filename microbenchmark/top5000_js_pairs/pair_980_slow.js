const Benchmark = {
    run: function() {
        var VAR_1 = "|http://creative.*/smart.js$script,third-party single pipe";
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = VAR_1.split("$")[0].substring(1);
        }
    }
};