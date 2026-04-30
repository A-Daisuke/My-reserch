const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          var VAR_1 = [];
          for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
            VAR_1.push("<li>", VAR_2, "</li>");
          }
          VAR_1.join("");
        };
        var VAR_3 = FUNCTION_1();
    }
};