const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100; VAR_2++) {
          VAR_1.push(
            new (function () {
              this.FUNCTION_1 = function () {
                console.log("Hello world");
              };
            })(),
          );
        }
    }
};