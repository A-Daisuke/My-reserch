const Benchmark = {
    run: function() {
        var VAR_1 = [125, "string", function () {}],
          VAR_2 = {
            0: 125,
            1: "string",
            2: function () {},
          };
        for (var VAR_3 = -1; VAR_3 < 500; ++VAR_3) {
          Object.prototype.toString.call(VAR_1) === "[object Array]";
          Object.prototype.toString.call(VAR_2) === "[object Array]";
        }
    }
};