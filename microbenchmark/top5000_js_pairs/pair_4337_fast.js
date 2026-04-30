const Benchmark = {
    run: function() {
        var VAR_1 = {};
        var VAR_2 = [];
        for (var VAR_3 = 1; VAR_3 <= 100; VAR_3++) {
          VAR_1["test" + VAR_3] = "test";
          VAR_2.push(1);
        }
        function FUNCTION_1(VAR_4, VAR_5, VAR_6) {
          if (typeof VAR_5 === "function") {
            VAR_5.bind(VAR_6 || this);
          }
          if (VAR_4.hasOwnProperty("length")) {
            VAR_4.forEach(VAR_5);
          } else {
            var VAR_7;
            for (VAR_7 in VAR_4) {
              VAR_5(VAR_4[VAR_7], VAR_7);
            }
          }
        }
        for (var VAR_9 = 0, VAR_10 = VAR_2.length; VAR_3 < VAR_10; VAR_3++) {
          VAR_2[VAR_3];
        }
    }
};