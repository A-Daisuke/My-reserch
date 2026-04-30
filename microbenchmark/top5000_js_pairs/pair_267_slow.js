const Benchmark = {
    run: function() {
        var VAR_1 = new String("Bob");
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          var VAR_3 = VAR_1.charAt(0);
        }
    }
};