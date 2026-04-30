const Benchmark = {
    run: function() {
        var VAR_1 = Array(7000).join("123;#Some, names@");
        VAR_1 = VAR_1.split("@");
        var VAR_2 = "Some, names";
        var VAR_3 = -1 * VAR_2.length;
        for (var VAR_4 = VAR_1.length; VAR_4--; ) {
          if (VAR_1[VAR_4].indexOf(";#" + VAR_2) > -1) {
          }
        }
    }
};