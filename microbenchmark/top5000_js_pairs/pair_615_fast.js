const Benchmark = {
    run: function() {
        var FUNCTION_2 = function () {
          this.VAR_4 = "AAAAAAAAAAAAAAAAAAAA";
        };
        var VAR_5 = { KEY_1: "AAAAAAAAAAAAAAAAAAAA" };
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_2.push(VAR_5);
        }
    }
};