const Benchmark = {
    run: function() {
        var VAR_1 = Array(7000).join("123;#Some, names@");
        VAR_1 = VAR_1.split("@");
        var VAR_2 = "Some, names";
        var VAR_4 = -1 * VAR_2.length;
        for (var VAR_3 = VAR_1.length; VAR_3--; ) {
          if (VAR_2 === VAR_1[VAR_3].slice(VAR_4)) {
          }
        }
    }
};