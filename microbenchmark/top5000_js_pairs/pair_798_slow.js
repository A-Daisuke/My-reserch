const Benchmark = {
    run: function() {
        var VAR_1 = Array(7000).join("123;#Some, names@");
        VAR_1 = VAR_1.split("@");
        var VAR_2 = "Some, names";
        for (var VAR_3 = VAR_1.length; VAR_3--; ) {
          if (VAR_2 === VAR_1[VAR_3].split(";#")[1]) {
          }
        }
    }
};