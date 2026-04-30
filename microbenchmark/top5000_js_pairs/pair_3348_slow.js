const Benchmark = {
    run: function() {
        var VAR_1 = "apple".split("");
        var VAR_2 = new Date();
        while (VAR_1.length < 1000) {
          var VAR_3 = VAR_1.length - 5;
          for (var VAR_4 = VAR_3; VAR_4 < VAR_3 + 10; ++VAR_4) VAR_1.push(VAR_1[VAR_4]);
        }
        VAR_1 = VAR_1.join("");
    }
};