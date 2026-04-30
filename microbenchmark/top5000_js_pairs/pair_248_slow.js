const Benchmark = {
    run: function() {
        var VAR_1 = new String("0123456789");
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          for (var VAR_3 = 0; VAR_3 < VAR_1.length; VAR_3++) {
            VAR_1.charAt(VAR_3);
          }
        }
    }
};